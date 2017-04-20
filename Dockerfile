FROM centos:7
MAINTAINER The CentOS Project <cloud-ops@centos.org>
LABEL Vendor="CentOS" \
      License=GPLv2 \
      Version=2.4.6-40


RUN yum -y --setopt=tsflags=nodocs update && \
    yum -y --setopt=tsflags=nodocs install httpd && \
    yum clean all

RUN yum -y --setopt=tsflags=nodocs install git

###########################################
# Setup Apache
###########################################
RUN rm /etc/httpd/conf.d/welcome.conf
#RUN sed -i '/s/AllowOverride None/AllowOverride All/i' /etc/httpd/conf/httpd.conf
RUN sed -i 's/\AllowOverride None/AllowOverride All/i' /etc/httpd/conf/httpd.conf
# Adding virtual hosts
ADD assets/vhosts_others.conf /etc/httpd/conf.d/vhosts_others.conf

###########################################
# Creating project's roots
###########################################
RUN mkdir -p '/var/www/html/cnbc_cms'
RUN mkdir -p '/var/www/html/sandbox'

###########################################
# Install PHP7
###########################################
RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
RUN rpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm

#RUN yum install -y php70w
RUN yum install -y php70w php70w-opcache php70w-pecl-xdebug php70w-mysql php70w-tidy php70w-common php70w-pecl-apcu php70w-mbstring php70w-devel

###########################################
# Install DNSMasq
###########################################
RUN yum -y --setopt=tsflags=nodocs install dnsmasq
RUN yum -y --setopt=tsflags=nodocs install nano


RUN echo "address=/mydev.cnbc.com/127.0.0.1" >> "/etc/dnsmasq.conf"
RUN echo "address=/mydev.com/127.0.0.1" >> "/etc/dnsmasq.conf"
RUN echo "address=/mydev.cnbcfm.com/127.0.0.1" >> "/etc/dnsmasq.conf"
RUN echo "no-dhcp-interface=" >> "/etc/dnsmasq.conf"
RUN echo "server=8.8.8.8" >> "/etc/dnsmasq.conf"

#CMD ["/usr/sbin/dnsmasq", "-d"]

#EXPOSE 22
#EXPOSE 53

EXPOSE 80

ADD assets/install_phalcon.sh /install_phalcon.sh
#RUN chmod -v +x /install_phalcon.sh

ADD assets/install_cnbc_cms.sh /install_cnbc_cms.sh
#RUN chmod -v +x /install_cnbc_cms.sh

ADD assets/pub_local.ini /pub_local.ini
ADD assets/minifier_config.php /minifier_config.php
#RUN chmod -v -x /install_phalcon.sh
#RUN chmod -v -x /install_cnbc_cms.sh


# Simple startup script to avoid some issues observed with container restart
ADD run-httpd.sh /run-httpd.sh
RUN chmod -v +x /run-httpd.sh
CMD ["/run-httpd.sh"]
