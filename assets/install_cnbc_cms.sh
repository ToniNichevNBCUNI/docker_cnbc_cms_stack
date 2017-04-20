#!/bin/bash

git_username=username
git_password=password
vhostPrefix=repo

###########################################
# Install sandbox tools
###########################################

mkdir /var/www/html/sandbox
echo "<?php echo phpinfo(); ?>" > /var/www/html/sandbox/index.php

###########################################
# Install CNBC CMS AND PUB
###########################################
mkdir -p /var/www/html/cnbc_cms/pub/src
mkdir -p /var/www/html/cnbc_cms/fm/src
mkdir -p /var/www/html/cnbc_cms/minifier/src

git_pub_repository="github.com/cnbc/CMS.ContentDelivery.git"
git_fm_repository="github.com/cnbc/CMS.StaticContent.git"
git_minifier_repository="github.com/cnbc/CMS.Minifier.git"
######################################################################

printf "\n\n\n\n"
echo "Installing PUB"
git clone "https://"${git_username}":"${git_password}"@"${git_pub_repository} "/var/www/html/cnbc_cms/pub/src/"${vhostPrefix}

printf "\n\n\n\n"
echo "Installing FM"
git clone "https://"${git_username}":"${git_password}"@"${git_fm_repository} "/var/www/html/cnbc_cms/fm/src/"${vhostPrefix}

printf "\n\n\n\n"
echo "Installing minifier"
git clone "https://"${git_username}":"${git_password}"@"${git_minifier_repository} "/var/www/html/cnbc_cms/minifier/src/"${vhostPrefix}
echo "Setting config ..."
sed -i "s/'localPath' => ''/'localPath' => '\/var\/www\/html\/cnbc_cms\/fm\/src\/repo'/g" /var/www/html/cnbc_cms/minifier/src/repo/app/config/config.php

printf "\n\n\n\n"
echo "copy config files"
cp "/pub_local.ini" "/var/www/html/cnbc_cms/pub/src/"${vhostPrefix}"/config/local.ini"
#cp "/minifier_config.php" "/var/www/html/cnbc_cms/minifier/src/"${vhostPrefix}"/app/config/config.php"

rm /var/www/html/cnbc_cms/fm/src/repo/applications/cnbc.com/staticcontent
ln -s /var/www/html/cnbc_cms/fm/src/repo /var/www/html/cnbc_cms/fm/src/repo/applications/cnbc.com/staticcontent

printf "\n\n\n\n"
echo "Setting permissions ..."
mkdir /var/www/html/cnbc_cms/pub/src/repo/logs
chmod 777 /var/www/html/cnbc_cms/pub/src/repo/logs

#echo "copy git pre-commit hook"
#cp "/vagrant/scripts/assets/pre-commit" "/var/www/cnbc_cms/pub/src/"${vhostPrefix}"/.git/pre-commit"
#chmod +x "/var/www/cnbc_cms/pub/src/"${vhostPrefix}"/.git/pre-commit"
