function convertColor ( color ) {
    if ( color == "붉은색" ) return /*new Color*/ ( '#AA153F' );
    else if ( color == "보라색" ) return /*new Color*/ ( '#693178' );
    else if ( color == "초록색" ) return /*new Color*/ ( '#125A18' );
    else if ( color == "노란색" ) return /*new Color*/ ( '#A88A30' );
    else if ( color == "갈색" ) return /*new Color*/ ( '#543D2B' );
    else return /*new Color*/ ( '#ffffff' );
}

function convertNickname ( nickname ) {
    if ( nickname == null || nickname == undefined || nickname == '' ) return '';
    return '<br>(' + nickname + ')';
}

function convertImage ( image, path, alt ) {
    if ( image == null || image == undefined || image == "" ) return '';
    var returnValue = "<img src='" + path + image + "' width='96px'";
    if ( alt != null && alt != undefined )
        returnValue += "alt='" + alt + "' title='" + alt + "'";
    return returnValue + " />";
}