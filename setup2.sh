docker exec tonitest chmod +x /install_phalcon.sh
docker exec tonitest /install_phalcon.sh

docker stop tonitest
docker start tonitest

printf "\n\nPlease run\n"
printf "docker exec tonitest /usr/sbin/dnsmasq -d  \n"
printf "detach the process (^C) and run \n"
printf "./setup3\n\n"
