function goToTab ( evt, tabName ) {
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName ( "tabContent" );
    for ( i = 0; i < tabContent.length; ++i ) {
        tabContent [ i ].style.display = "none";
    }

    tabLinks = document.getElementsByClassName ( "tabLinks" );
    for ( i = 0; i < tabLinks.length; ++i ) {
        tabLinks [ i ].className = tabLinks [ i ].className.replace ( " active", "" );
    }

    document.getElementById ( tabName ).style.display = "block";
    evt.currentTarget.className += " active";
}

function initialize () {
    document.getElementById ( 'defaultButton' ).click();

    initialize_survivor_perks ( function () {
        generate_survivor_perks ();
    } );
    initialize_survivor_addons ( function () {
        initialize_survivor_items ( function () {
            generate_survivor_item ();
        } );
    } );
    initialize_survivor_offerings ( function () {
        generate_survivor_offering ();
    } );
}

function generate_survivor_perks () {
    var arr = random_select_survivor_perks ( 4 );

    document.getElementById('perk_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
    document.getElementById('perk_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
    document.getElementById('perk_name_3').innerHTML = arr [ 2 ].name + convertNickname ( arr [ 2 ].nickname );
    document.getElementById('perk_name_4').innerHTML = arr [ 3 ].name + convertNickname ( arr [ 3 ].nickname );
    document.getElementById('perk_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
    document.getElementById('perk_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
    document.getElementById('perk_name_3').style.backgroundColor = convertColor ( arr [ 2 ].color );
    document.getElementById('perk_name_4').style.backgroundColor = convertColor ( arr [ 3 ].color );
    document.getElementById('perk_for_1').innerHTML = arr [ 0 ].for;
    document.getElementById('perk_for_2').innerHTML = arr [ 1 ].for;
    document.getElementById('perk_for_3').innerHTML = arr [ 2 ].for;
    document.getElementById('perk_for_4').innerHTML = arr [ 3 ].for;
}

function generate_survivor_item () {
    var item = random_select_survivor_item ();
    if ( item != null && item != undefined ) {
        document.getElementById('item_name').innerHTML = item.name;
        document.getElementById('item_name').style.backgroundColor = convertColor ( item.color );
        generate_survivor_addons ( item.type );
    }
    else {
        document.getElementById('item_name').innerHTML = '아이템 없음';
        document.getElementById('item_name').style.backgroundColor = '#000000';
        generate_survivor_addons ( null );
    }
}

function generate_survivor_addons ( type ) {
    if ( type != null ) {
        var arr = random_select_survivor_addons ( 2, type );
        if ( arr [ 0 ] != null && arr [ 0 ] != undefined ) {
            document.getElementById('addon_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
            document.getElementById('addon_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
        }
        else {
            document.getElementById('addon_name_1').innerHTML = "없음";
            document.getElementById('addon_name_1').style.backgroundColor = "#000000";
        }

        if ( arr [ 1 ] != null && arr [ 1 ] != undefined ) {
            document.getElementById('addon_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
            document.getElementById('addon_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
        }
        else {
            document.getElementById('addon_name_2').innerHTML = "없음";
            document.getElementById('addon_name_2').style.backgroundColor = "#000000";
        }
    }
    else {

    }
}

function generate_survivor_offering () {
    var offering = random_select_survivor_offering ();
    if ( offering != null && offering != undefined ) {
        document.getElementById('offering_name').innerHTML = offering.name;
        document.getElementById('offering_name').style.backgroundColor = convertColor ( offering.color );
        document.getElementById('offering_memo').innerHTML = offering.memo;
    }
    else {
        document.getElementById('offering_name').innerHTML = '공물 없음';
        document.getElementById('offering_name').style.backgroundColor = '#000000';
        document.getElementById('offering_memo').innerHTML = '공물 없이 시작하세요';
    }
}