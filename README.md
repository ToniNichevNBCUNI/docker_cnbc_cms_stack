#
# Setting Up Environment Using Setup Script
#

* Remove all images and containers
  $ docker rm -f $(docker ps -a -q);docker rmi $(docker images -q)

* Edit assets/install_cnbc_cms.sh and add your git username and password

* run install scripts:
  $ ./Setup1.sh
  $ ./Setup2.sh
  $ ./Setup3.sh

* run and detach using (ctl + c)
  $ docker exec tonitest /usr/sbin/dnsmasq -d  

#
# Setting Up Environment Manually
#

* Remove all images
  $ docker rm -f $(docker ps -a -q);docker rmi $(docker images -q)

* Build container
  $ docker build -t toni_dev_container:one .

* Run container with local DNS and sharred folder
  $ docker run -d -v /Users/toninichev/Cloud/workspace/Docker/DevVM/src/dev/www/html:/var/www/html -p80:80 --dns=127.0.0.1 --name tonitest -t toni_dev_container:one

* Check running containers
  $ docker ps

* Start DNS Masq from the host machine (then ckick ^C to detach)
    $ docker exec tonitest /usr/sbin/dnsmasq -d  

#
# Useful Docker commands
#

* Remove all images
  $ docker rm -f $(docker ps -a -q);docker rmi $(docker images -q)

* Build container
  $ docker build -t toni_dev_container:one .

* Run container
  - regular way
    $ docker run -d --name tonitest -t toni_dev_container:one

  - with local DNS (you have to start dnsmasq later on)
    $ docker run -d -p80:80 --dns=127.0.0.1 --name tonitest -t toni_dev_container:one

  - with local DNS, and file share
    $ docker run -d -v /Users/toninichev/Cloud/workspace/Docker/DevVM/src/dev/www/html:/var/www/html -p80:80 --dns=127.0.0.1 --name tonitest -t toni_dev_container:one

* Check running containers
  $ docker ps

* Check all containers
  $ docker ps -a

* SSH to the container
  $ docker exec -t -i tonitest /bin/bash


* Start DNSMasq in the container
  - within the container
    # /usr/sbin/dnsmasq -d

  - from the host machine
    $ docker exec tonitest /usr/sbin/dnsmasq -d

* Restart container
  $ docker restart tonitest
