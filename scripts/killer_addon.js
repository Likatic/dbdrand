var killer_addons;
var killer_addons_dict = new Object ();

function initialize_killer_addons ( loadComplete ) {
    if ( killer_addons != null && killer_addons != undefined ) return;
    $.getJSON ( 'data/killers.addons.json', function ( json ) {
        killer_addons = json.killer_addons;

        for ( var i = 0; i < killer_addons.length; ++i ) {
            var addon = killer_addons [ i ];
            if ( killer_addons_dict [ addon.target ] == null || killer_addons_dict [ addon.target ] == undefined )
                killer_addons_dict [ addon.target ] = new Array ();
            killer_addons_dict [ addon.target ].push ( addon );
        }

        loadComplete ();
    } );
}

function random_select_killer_addons ( num, target ) {
    var returnArray = new Array ();

    if ( killer_addons_dict [ target ] == null || killer_addons_dict [ target ] == undefined )
        return [ null, null ];

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * killer_addons_dict [ target ].length );
        var addon = killer_addons_dict [ target ] [ randomValue ];
        if ( returnArray.indexOf ( addon ) > -1 ) {
            if ( addon != null && addon != undefined )
                continue;
        }
        returnArray.push ( addon );
    }

    return returnArray;
}
