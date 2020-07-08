<?php

function get_js_func($host, $port, $module_path, $function_name) {
    $url = $host . ':' . $port . '?path=' . urlencode($module_path) . '&func=' . urlencode($function_name);
    
    return file_get_contents($url);
    
}
echo '<script>' . PHP_EOL;
echo get_js_func('http://127.0.0.1', '8080', './mods/Date', 'testFunc') . PHP_EOL;
echo 'testFunc();' . PHP_EOL;
echo '</script>';
