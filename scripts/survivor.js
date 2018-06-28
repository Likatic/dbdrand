var survivors;

function initialize_survivors ( loadComplete ) {
    if ( survivors != null && survivors != undefined ) return;
    $.getJSON ( 'data/survivors.json', function ( json ) {
        survivors = json.survivors;
        loadComplete ();
    } );
}

function get_survivors () { return survivors; }

function random_select_survivor () {
    var randomValue = Math.round ( Math.random () * ( survivors.length - 1 ) );
    return survivors [ randomValue ];
}
