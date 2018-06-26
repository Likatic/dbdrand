var survivor_addons;

var survivor_addons_dict = new Object ();

function initialize_survivor_addons ( loadComplete ) {
    survivor_addons_dict [ "공구상자" ] = new Array ();

    $.getJSON ( 'https://raw.githubusercontent.com/daramkun/dbdrand/master/data/survivors.addons.json', function ( json ) {
        survivor_addons = json.survivor_addons;

        for ( var i = 0; i < survivor_addons.length; ++i ) {
            var addon = survivor_addons [ i ];
            survivor_addons_dict [ addon.target ].push ( addon );
        }

        loadComplete ();
    } );
}

function random_select_survivor_addons ( num, type ) {
    var returnArray = new Array ();

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * survivor_addons_dict [ type ].length );
        var addon = survivor_addons_dict [ type ] [ randomValue ];
        if ( addon == null || addon == undefined || returnArray.indexOf ( addon ) > -1 || addon.target != type ) {
            continue;
        }
        returnArray.push ( addon );
    }

    return returnArray;
}
