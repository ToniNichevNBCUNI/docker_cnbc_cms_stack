docker exec tonitest chmod +x /install_cnbc_cms.sh
docker exec tonitest /install_cnbc_cms.sh

docker stop tonitest
docker start tonitest

printf "\n\nPlease, start DNS service by running\ndocker exec tonitest /usr/sbin/dnsmasq -d"
