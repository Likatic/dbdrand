var survivor_offerings;

function initialize_survivor_offerings ( loadComplete ) {
    if ( survivor_offerings != null && survivor_offerings != undefined ) return;
    $.getJSON ( 'data/survivors.offerings.json', function ( json ) {
        survivor_offerings = json.survivor_offerings;
        loadComplete ();
    } );
}

function random_select_survivor_offering () {
    var randomValue = Math.round ( Math.random () * ( survivor_offerings.length + 1 ) );
    return survivor_offerings [ randomValue ];
}

