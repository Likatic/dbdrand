var survivor_offerings;

function initialize_survivor_offerings ( loadComplete ) {
    $.getJSON ( 'data/survivors.offerings.json', function ( json ) {
        survivor_offerings = json.survivor_offerings;
        loadComplete ();
    } );
}

function random_select_survivor_offering () {
    var randomValue = Math.round ( Math.random () * ( survivor_offerings.length + 2 ) );
    return survivor_offerings [ randomValue ];
}

