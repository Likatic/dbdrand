var survivor_perks;

function initialize_survivor_perks ( loadComplete ) {
    if ( survivor_perks != null && survivor_perks != undefined ) return;
    $.getJSON ( 'data/survivors.perks.json', function ( json ) {
        survivor_perks = json.survivor_perks;
        loadComplete ();
    } );
}

function random_select_survivor_perks ( num ) {
    var returnArray = new Array ();

    while ( returnArray.length != num ) {
        var randomValue = Math.round ( Math.random () * survivor_perks.length );
        var perk = survivor_perks [ randomValue ];
        if ( perk == null || perk == undefined || returnArray.indexOf ( perk ) > -1 ) {
            continue;
        }
        returnArray.push ( perk );
    }

    return returnArray;
}
