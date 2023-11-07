$( function() {
    const availableTags = [
        "BigChungus",
        "TheWok",
        "YiLongMusk",
        "ZhongXina",
        "JohnXina",
        "Clueless",
        "MoistCritical",
        "ThinkMark,think",
        "Shrek",
        "Doge",
        "HelloThere",
        "PepeTheFrog",
        "AncientAliens",
        "MonkaS",
        "Kappa",
        "PressF",
        "GigaChad",
        "Sigma",
        "Harambe",
        "Stonks",
        "Wojak"
    ];

    $( "#tags" ).autocomplete({
        source: availableTags
    });
} );
