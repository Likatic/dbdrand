var killer_offerings;

function initialize_killer_offerings ( loadComplete ) {
    if ( killer_offerings != null && killer_offerings != undefined ) return;
    $.getJSON ( 'data/killers.offerings.json', function ( json ) {
        killer_offerings = json.killer_offerings;
        loadComplete ();
    } );
}

function random_select_killer_offering () {
    var randomValue = Math.round ( Math.random () * ( killer_offerings.length + 1 ) );
    return killer_offerings [ randomValue ];
}

