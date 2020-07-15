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