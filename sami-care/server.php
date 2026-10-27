<?php

$publicPath = getcwd();

$uri = urldecode(
    parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? ''
);

// Serve existing public files directly.
if ($uri !== '/' && file_exists($publicPath.$uri)) {
    return false;
}

require_once $publicPath.'/index.php';
