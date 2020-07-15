'use strict'


const searchGenre = (value) => {
    for (let i = 0; i < 15; i++);
    return fetch(`https://api.jikan.moe/v3/genre/anime/${value}`)
        .then(res => res.json())
        .then(data => data.anime);
}






const search = (num) => {
    searchGenre(num).then((movies) => {
        const section = document.querySelector(".idsection")
        section.innerHTML = ""


        for (let i = 0; i < movies.length; i++) {
            const genres = movies[i].genres;
            const [badget] = genres.filter(element => Number(num) === element.mal_id);

            const divMovie = document.createElement("div");
            divMovie.className = "anime-target"
            divMovie.innerHTML = `
            <div class="image-container">
                <img class="anime-img" src="${movies[i].image_url}" alt="">
                <span class="genre-badge">${badget.name}</span>
            </div>
            <h3 class="anime-title">${movies[i].title}</h3>
            <p class="anime-description">${movies[i].synopsis}</p>`

            section.appendChild(divMovie);
        }
    })
}