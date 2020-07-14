'use strict'

const searchGenre = (value) => {
    return fetch('https://api.jikan.moe/v3/search/anime?genre=${value}')
        .then(res => res.json())
        .then(data => data.results);
}

const section = document.querySelector("idsection")

const search = (num) => {
    searchGenre(num).then((movies) => {
        movies.forEach((movie) => {
            const divMovie = document.createElement("<div  ");
            divMovie.innerHTML = ` 
            <img class = "image" src = "${movie.image_url}" alt = "${movie.title}" />
            <h4 class = "text"> $ {movie.title} </h4> 
            <p class = "description"> ${movie.synopsis} </p>`

            section.appendChild(divMovie);

        })
    })
}