<?php

use Phalcon\Logger;

defined('BASE_PATH') || define('BASE_PATH', getenv('BASE_PATH') ?: realpath(dirname(__FILE__) . '/../..'));
defined('APP_PATH') || define('APP_PATH', BASE_PATH . '/app');

$environment = getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'local';

$logger = [
            'adapter'  => 'File',
            'filename' => BASE_PATH . '/logs/application.log',
            'logLevel' => Logger::DEBUG,
            'date'     => 'D M j, Y H:i:s',
            'format'   => '[%date%][%type%] %message%'
        ];

$production = [
        'localPath' => '/home/cms/prod/applications/cnbc.com/staticcontent',
        'error_reporting' => 0,
        'display_errors'  => 0,
        'display_startup_errors' => 0,
        'logger' => $logger
    ];

$environmentConfig = [
    'production' => $production,
    'pre-prod'   => $production,
    'prod' => [
        'localPath' => '/home/cms/prod/applications/cnbc.com/staticcontent',
        'error_reporting' => 0,
        'display_errors'  => 0,
        'display_startup_errors' => 0,
        'logger' => $logger
    ],
    'ecprod' => [
        'localPath' => '/home/cms/fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 0,
        'display_errors'  => 0,
        'display_startup_errors' => 0,
        'logger' => $logger
    ],
    'prod-pa' => [
        'localPath' => '/home/cms/fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 0,
        'display_errors'  => 0,
        'display_startup_errors' => 0,
        'logger' => $logger
    ],
    'local' => [
        'localPath' => '/var/www/html/cnbc_cms/fm/src/repo',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa01' => [
        'localPath' => '/home/cms/qa-pa01fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa02' => [
        'localPath' => '/home/cms/qa-pa02fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa03' => [
        'localPath' => '/home/cms/qa-pa03fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa04' => [
        'localPath' => '/home/cms/qa-pa04fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa05' => [
        'localPath' => '/home/cms/qa-pa05fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa06' => [
        'localPath' => '/home/cms/qa-pa06fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'qa-pa07' => [
        'localPath' => '/home/cms/qa-pa07fm/applications/cnbc.com/staticcontent',
        'error_reporting' => E_ALL,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'stg-pa01' => [
        'localPath' => '/home/cms/stg-pa01fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 1,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'stg-pa02' => [
        'localPath' => '/home/cms/stg-pa02fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 1,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'stg-ec01' => [
        'localPath' => '/home/cms/stg-ec01fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 1,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ],
    'stg-ec02' => [
        'localPath' => '/home/cms/stg-ec02fm/applications/cnbc.com/staticcontent',
        'error_reporting' => 1,
        'display_errors'  => 1,
        'display_startup_errors' => 1,
        'logger' => $logger
    ]
 ];

return new \Phalcon\Config(
    ['application' => [
        'appDir'         => APP_PATH . '/',
        'controllersDir' => APP_PATH . '/controllers/',
        'modelsDir'      => APP_PATH . '/models/',
        'migrationsDir'  => APP_PATH . '/migrations/',
        'viewsDir'       => APP_PATH . '/views/',
        'pluginsDir'     => APP_PATH . '/plugins/',
        'libraryDir'     => APP_PATH . '/library/',
        'utilDir'        => APP_PATH . '/util/',
        'cacheDir'       => BASE_PATH . '/cache/',
        'baseUri'        => '/',
    ],
    'env' => $environmentConfig[$environment]
]);
