'use strict'

const animeGenre = [{
        genre: 'Action',
        num: 1,
        color: 'red'
    },
    {
        genre: 'Adventures',
        num: 2,
        color: 'green'
    }, {
        genre: 'Cars',
        num: 3,
        color: 'orange'
    }, {
        genre: 'Comedy',
        num: 4,
        color: 'grey'
    }, {
        genre: 'Dementia',
        num: 5,
        color: 'pink'
    }, {
        genre: 'Demons',
        num: 6,
        color: 'blue'
    }, {
        genre: 'Mystery',
        num: 7,
        color: 'yellow'
    }, {
        genre: 'Drama',
        num: 8,
        color: 'yellow'
    }, {
        genre: 'Ecchi',
        num: 9,
        color: 'yellow'
    }, {
        genre: 'Fantasy',
        num: 10,
        color: 'yellow'
    }, {
        genre: 'Game',
        num: 11,
        color: 'yellow'
    }, {
        genre: 'Hentai',
        num: 12,
        color: 'yellow'
    }, {
        genre: 'Historical',
        num: 13,
        color: 'yellow'
    }, {
        genre: 'Horror',
        num: 14,
        color: 'yellow'
    }, {
        genre: 'Kids',
        num: 15,
        color: 'yellow'
    }, {
        genre: 'Magic',
        num: 16,
        color: 'yellow'
    }, {
        genre: 'Martial Arts',
        num: 17,
        color: 'yellow'
    }, {
        genre: 'Mecha',
        num: 18,
        color: 'yellow'
    }, {
        genre: 'Music',
        num: 19,
        color: 'yellow'
    }, {
        genre: 'Parody',
        num: 20,
        color: 'yellow'
    }, {
        genre: 'Samurai',
        num: 21,
        color: 'yellow'
    }, {
        genre: 'Romance',
        num: 22,
        color: 'yellow'
    }, {
        genre: 'School',
        num: 23,
        color: 'yellow'
    }, {
        genre: 'Sci Fi',
        num: 24,
        color: 'yellow'
    }, {
        genre: 'Shoujo',
        num: 25,
        color: 'yellow'
    }, {
        genre: 'Shoujo Ai',
        num: 26,
        color: 'yellow'
    }, {
        genre: 'Shounen',
        num: 27,
        color: 'yellow'
    }, {
        genre: 'Shounen Ai',
        num: 28,
        color: 'yellow'
    }, {
        genre: 'Space',
        num: 29,
        color: 'yellow'
    }, {
        genre: 'Sports',
        num: 30,
        color: 'yellow'
    }, {
        genre: 'Super Power',
        num: 31,
        color: 'yellow'
    }, {
        genre: 'Vampire',
        num: 32,
        color: 'yellow'
    }, {
        genre: 'Yaoi',
        num: 33,
        color: 'yellow'
    }, {
        genre: 'Yuri',
        num: 34,
        color: 'yellow'
    }, {
        genre: 'Harem',
        num: 35,
        color: 'yellow'
    }, {
        genre: 'Slice Of Live',
        num: 36,
        color: 'yellow'
    }, {
        genre: 'Supernatural',
        num: 37,
        color: 'yellow'
    }, {
        genre: 'Military',
        num: 38,
        color: 'yellow'
    }, {
        genre: 'Police',
        num: 39,
        color: 'yellow'
    }, {
        genre: 'Psycological',
        num: 40,
        color: 'yellow'
    }, {
        genre: 'Thriller',
        num: 41,
        color: 'yellow'
    }, {
        genre: 'Seinen',
        num: 42,
        color: 'yellow'
    }, {
        genre: 'Josei',
        num: 43,
        color: 'yellow'
    }
]

var select = document.getElementById("genre-selector");

for (var i = 0; i < animeGenre.length; i++) {
    var genreindx = animeGenre[i];
    var genereOpt = document.createElement("option");
    genereOpt.textContent = genreindx.genre;
    genereOpt.value = genreindx.num;
    select.appendChild(genereOpt);

}

select.addEventListener("change", (e) => search(e.target.value))