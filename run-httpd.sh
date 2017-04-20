#!/bin/bash

# Make sure we're not confused by old, incompletely-shutdown httpd
# context after restarting the container.  httpd won't start correctly
# if it thinks it is already running.
rm -rf /run/httpd/* /tmp/httpd*

/usr/sbin/apachectl -DFOREGROUND
#/usr/sbin/dnsmasq -d
#exec /usr/sbin/apachectl -DFOREGROUND
#exec /bin/sh /usr/sbin/dnsmasq -d
#exec /usr/sbin/dnsmasq -d
