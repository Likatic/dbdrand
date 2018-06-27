var killer_addons;

var killer_addons_dict = new Object ();

function initialize_killer_addons ( loadComplete ) {
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

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * killer_addons_dict [ target ].length );
        var addon = killer_addons_dict [ target ] [ randomValue ];
        if ( addon == null || addon == undefined || returnArray.indexOf ( addon ) > -1 || addon.target != target ) {
            continue;
        }
        returnArray.push ( addon );
    }

    return returnArray;
}
