function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            // Add a record here
            artist: "Siddharta",
            title: "Nord",
            relase_year: 2001,
            id: 100,
            formats: {
                1: "CD",
                2: "Vinyl",
                3: "MC"
            },
            gold: true
        },
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;