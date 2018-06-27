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

    initialize_killer_perks ( function () {
        generate_killer_perks ();
    } );
    initialize_killer_offerings ( function () {
        generate_killer_offering ();
    } );
    initialize_killer_addons ( function () {
        generate_killer_addon ();
     } );
}

function generate_survivor_perks () {
    var arr = random_select_survivor_perks ( 4 );
    var path = './images/survivors/perks/';

    document.getElementById('survivor_perk_image_1').innerHTML = convertImage ( arr [ 0 ].image, path );
    document.getElementById('survivor_perk_image_2').innerHTML = convertImage ( arr [ 1 ].image, path );
    document.getElementById('survivor_perk_image_3').innerHTML = convertImage ( arr [ 2 ].image, path );
    document.getElementById('survivor_perk_image_4').innerHTML = convertImage ( arr [ 3 ].image, path );
    document.getElementById('survivor_perk_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
    document.getElementById('survivor_perk_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
    document.getElementById('survivor_perk_name_3').innerHTML = arr [ 2 ].name + convertNickname ( arr [ 2 ].nickname );
    document.getElementById('survivor_perk_name_4').innerHTML = arr [ 3 ].name + convertNickname ( arr [ 3 ].nickname );
    document.getElementById('survivor_perk_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
    document.getElementById('survivor_perk_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
    document.getElementById('survivor_perk_name_3').style.backgroundColor = convertColor ( arr [ 2 ].color );
    document.getElementById('survivor_perk_name_4').style.backgroundColor = convertColor ( arr [ 3 ].color );
    document.getElementById('survivor_perk_for_1').innerHTML = arr [ 0 ].for;
    document.getElementById('survivor_perk_for_2').innerHTML = arr [ 1 ].for;
    document.getElementById('survivor_perk_for_3').innerHTML = arr [ 2 ].for;
    document.getElementById('survivor_perk_for_4').innerHTML = arr [ 3 ].for;
}

function generate_survivor_item () {
    var item = random_select_survivor_item ();
    var path = './images/survivors/items/';

    if ( item != null && item != undefined ) {
        document.getElementById('survivor_item_image').innerHTML = convertImage ( item.image, path );
        document.getElementById('survivor_item_name').innerHTML = item.name;
        document.getElementById('survivor_item_name').style.backgroundColor = convertColor ( item.color );
        generate_survivor_addons ( item.type );
    }
    else {
        document.getElementById('survivor_item_image').innerHTML = '';
        document.getElementById('survivor_item_name').innerHTML = '아이템 없음';
        document.getElementById('survivor_item_name').style.backgroundColor = '#000000';
        generate_survivor_addons ( null );
    }
}

function generate_survivor_addons ( type ) {
    var path = './images/survivors/addons/';

    if ( type != null ) {
        var arr = random_select_survivor_addons ( 2, type );
        if ( arr [ 0 ] != null && arr [ 0 ] != undefined ) {
            document.getElementById('survivor_addon_image_1').innerHTML = convertImage ( arr [ 0 ].image, path );
            document.getElementById('survivor_addon_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
            document.getElementById('survivor_addon_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
        }
        else {
            document.getElementById('survivor_addon_image_1').innerHTML = '';
            document.getElementById('survivor_addon_name_1').innerHTML = "없음";
            document.getElementById('survivor_addon_name_1').style.backgroundColor = "#000000";
        }

        if ( arr [ 1 ] != null && arr [ 1 ] != undefined ) {
            document.getElementById('survivor_addon_image_2').innerHTML = convertImage ( arr [ 1 ].image, path );
            document.getElementById('survivor_addon_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
            document.getElementById('survivor_addon_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
        }
        else {
            document.getElementById('survivor_addon_image_2').innerHTML = '';
            document.getElementById('survivor_addon_name_2').innerHTML = "없음";
            document.getElementById('survivor_addon_name_2').style.backgroundColor = "#000000";
        }
    }
    else {
        document.getElementById('survivor_addon_image_1').innerHTML = '';
        document.getElementById('survivor_addon_name_1').innerHTML = "없음";
        document.getElementById('survivor_addon_name_1').style.backgroundColor = "#000000";
        document.getElementById('survivor_addon_image_2').innerHTML = '';
        document.getElementById('survivor_addon_name_2').innerHTML = "없음";
        document.getElementById('survivor_addon_name_2').style.backgroundColor = "#000000";
    }
}

function generate_survivor_offering () {
    var offering = random_select_survivor_offering ();
    var path = './images/survivors/offerings/';
    if ( offering != null && offering != undefined ) {
        document.getElementById('survivor_offering_image').innerHTML = convertImage ( offering.image, path );
        document.getElementById('survivor_offering_name').innerHTML = offering.name;
        document.getElementById('survivor_offering_name').style.backgroundColor = convertColor ( offering.color );
        document.getElementById('survivor_offering_memo').innerHTML = offering.memo;
    }
    else {
        document.getElementById('survivor_offering_image').innerHTML = '';
        document.getElementById('survivor_offering_name').innerHTML = '공물 없음';
        document.getElementById('survivor_offering_name').style.backgroundColor = '#000000';
        document.getElementById('survivor_offering_memo').innerHTML = '공물 없이 시작하세요';
    }
}

function generate_killer_perks () {
    var arr = random_select_killer_perks ( 4 );
    var path = './images/killers/perks/';

    document.getElementById('killer_perk_image_1').innerHTML = convertImage ( arr [ 0 ].image, path );
    document.getElementById('killer_perk_image_2').innerHTML = convertImage ( arr [ 1 ].image, path );
    document.getElementById('killer_perk_image_3').innerHTML = convertImage ( arr [ 2 ].image, path );
    document.getElementById('killer_perk_image_4').innerHTML = convertImage ( arr [ 3 ].image, path );
    document.getElementById('killer_perk_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
    document.getElementById('killer_perk_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
    document.getElementById('killer_perk_name_3').innerHTML = arr [ 2 ].name + convertNickname ( arr [ 2 ].nickname );
    document.getElementById('killer_perk_name_4').innerHTML = arr [ 3 ].name + convertNickname ( arr [ 3 ].nickname );
    document.getElementById('killer_perk_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
    document.getElementById('killer_perk_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
    document.getElementById('killer_perk_name_3').style.backgroundColor = convertColor ( arr [ 2 ].color );
    document.getElementById('killer_perk_name_4').style.backgroundColor = convertColor ( arr [ 3 ].color );
    document.getElementById('killer_perk_for_1').innerHTML = arr [ 0 ].for;
    document.getElementById('killer_perk_for_2').innerHTML = arr [ 1 ].for;
    document.getElementById('killer_perk_for_3').innerHTML = arr [ 2 ].for;
    document.getElementById('killer_perk_for_4').innerHTML = arr [ 3 ].for;
}

function generate_killer_offering () {
    var offering = random_select_killer_offering ();
    var path = './images/killers/offerings/';
    if ( offering != null && offering != undefined ) {
        document.getElementById('killer_offering_image').innerHTML = convertImage ( offering.image, path );
        document.getElementById('killer_offering_name').innerHTML = offering.name;
        document.getElementById('killer_offering_name').style.backgroundColor = convertColor ( offering.color );
        document.getElementById('killer_offering_memo').innerHTML = offering.memo;
    }
    else {
        document.getElementById('killer_offering_image').innerHTML = '';
        document.getElementById('killer_offering_name').innerHTML = '공물 없음';
        document.getElementById('killer_offering_name').style.backgroundColor = '#000000';
        document.getElementById('killer_offering_memo').innerHTML = '공물 없이 시작하세요';
    }
}

function generate_killer_addon () {
    var path = './images/killers/addons/';

    var type = document.getElementById('killer_selector').value;

    if ( type != null ) {
        var arr = random_select_killer_addons ( 2, type );
        if ( arr [ 0 ] != null && arr [ 0 ] != undefined ) {
            document.getElementById('killer_addon_image_1').innerHTML = convertImage ( arr [ 0 ].image, path );
            document.getElementById('killer_addon_name_1').innerHTML = arr [ 0 ].name + convertNickname ( arr [ 0 ].nickname );
            document.getElementById('killer_addon_name_1').style.backgroundColor = convertColor ( arr [ 0 ].color );
        }
        else {
            document.getElementById('killer_addon_image_1').innerHTML = '';
            document.getElementById('killer_addon_name_1').innerHTML = "없음";
            document.getElementById('killer_addon_name_1').style.backgroundColor = "#000000";
        }

        if ( arr [ 1 ] != null && arr [ 1 ] != undefined ) {
            document.getElementById('killer_addon_image_2').innerHTML = convertImage ( arr [ 1 ].image, path );
            document.getElementById('killer_addon_name_2').innerHTML = arr [ 1 ].name + convertNickname ( arr [ 1 ].nickname );
            document.getElementById('killer_addon_name_2').style.backgroundColor = convertColor ( arr [ 1 ].color );
        }
        else {
            document.getElementById('killer_addon_image_2').innerHTML = '';
            document.getElementById('killer_addon_name_2').innerHTML = "없음";
            document.getElementById('killer_addon_name_2').style.backgroundColor = "#000000";
        }
    }
    else {
        document.getElementById('killer_addon_image_1').innerHTML = '';
        document.getElementById('killer_addon_name_1').innerHTML = "없음";
        document.getElementById('killer_addon_name_1').style.backgroundColor = "#000000";
        document.getElementById('killer_addon_image_2').innerHTML = '';
        document.getElementById('killer_addon_name_2').innerHTML = "없음";
        document.getElementById('killer_addon_name_2').style.backgroundColor = "#000000";
    }
}