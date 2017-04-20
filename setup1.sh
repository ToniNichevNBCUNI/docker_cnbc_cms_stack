#!/bin/bash

docker build -t toni_dev_container:one .

docker run -d -v /Users/toninichev/Cloud/workspace/Docker/DevVM/src/dev/www:/var/www -p80:80 --dns=127.0.0.1  --name tonitest -t toni_dev_container:one

printf "\n\nPlease run\n"
printf "docker exec tonitest /usr/sbin/dnsmasq -d  \n"
printf "detach the process (^C) and run \n"
printf "./setup2\n\n"
