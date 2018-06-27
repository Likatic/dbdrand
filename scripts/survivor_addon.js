var survivor_addons;

var survivor_addons_dict = new Object ();

function initialize_survivor_addons ( loadComplete ) {
    survivor_addons_dict [ "공구상자" ] = new Array ();
    survivor_addons_dict [ "구급상자" ] = new Array ();
    survivor_addons_dict [ "손전등" ] = new Array ();
    survivor_addons_dict [ "지도" ] = new Array ();
    survivor_addons_dict [ "열쇠" ] = new Array ();

    $.getJSON ( 'data/survivors.addons.json', function ( json ) {
        survivor_addons = json.survivor_addons;

        for ( var i = 0; i < survivor_addons.length; ++i ) {
            var addon = survivor_addons [ i ];
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
