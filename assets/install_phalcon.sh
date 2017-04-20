#!/bin/sh

###########################################
# Install Phalcon
###########################################
yum install -y gcc make
yum install -y which

cd /tmp/
git clone --depth=1 https://github.com/phalcon/cphalcon.git
cd cphalcon/build/
./install

echo "extension=phalcon.so" >> /etc/php.d/phalcon.ini
rm -rf /tmp/*
