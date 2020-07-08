
exports.skelton = `
<!DOCTYPE html>
<html>
<head>
    <title>%s</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
%s
%s
</head>

<body>
    <nav>
        <ul>
            <li><a href="/page1">Page 1</a></li>
            <li><a href="/page2">Page 2</a></li>
        </ul>
    </nav>
%s
</body>
</html>
`;

exports.cssLinkFormat = '<link rel="stylesheet" href="%s">';
exports.scriptLinkFormat = '<script src="%s"></script>';
