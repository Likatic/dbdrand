var survivor_addons;
var survivor_addons_dict = new Object ();

function initialize_survivor_addons ( loadComplete ) {
    if ( survivor_addons != null && survivor_addons != undefined ) return;
    $.getJSON ( 'data/survivors.addons.json', function ( json ) {
        survivor_addons = json.survivor_addons;

        for ( var i = 0; i < survivor_addons.length; ++i ) {
            var addon = survivor_addons [ i ];
            if ( survivor_addons_dict [ addon.target ] == null || survivor_addons_dict [ addon.target ] == undefined )
            survivor_addons_dict [ addon.target ] = new Array ();
            survivor_addons_dict [ addon.target ].push ( addon );
        }

        loadComplete ();
    } );
}

function random_select_survivor_addons ( num, target ) {
    var returnArray = new Array ();

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * survivor_addons_dict [ target ].length );
        var addon = survivor_addons_dict [ target ] [ randomValue ];
        if ( addon == null || addon == undefined || returnArray.indexOf ( addon ) > -1 || addon.target != target ) {
            continue;
        }
        returnArray.push ( addon );
    }

    return returnArray;
}
