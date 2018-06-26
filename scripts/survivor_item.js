var survivor_items;

function initialize_survivor_items ( loadComplete ) {
    $.getJSON ( 'https://raw.githubusercontent.com/daramkun/dbdrand/master/data/survivors.items.json', function ( json ) {
        survivor_items = json.survivor_items;
        loadComplete ();
    } );
}

function random_select_survivor_item () {
    var randomValue = Math.round ( Math.random () * survivor_items.length );
    return survivor_items [ randomValue ];
}