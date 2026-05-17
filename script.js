const movies = [
    { name: "Iron Man",categ:"movie", genre: "Action", poster: "https://cdn.marvel.com/u/prod/marvel/i/mg/3/90/5a79e06439b05/portrait_uncanny.jpg" },
    { name: "Avengers",categ:"movie", genre: "Action", poster: "avengers.webp" },
    { name: "Captain America", categ:"movie",genre: "Action", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Poster_for_the_1990_Captain_America_movie.jpg/250px-Poster_for_the_1990_Captain_America_movie.jpg" },
    { name: "Thor", categ:"movie",genre: "Action", poster: "https://static.beebom.com/wp-content/uploads/2024/10/Thor-2011.jpg?w=216&quality=75" },
    { name: "Black Panther",categ:"movie", genre: "Action", poster: "https://i.pinimg.com/originals/06/30/83/063083b532acbcde0b0c5f28919545cc.jpg" },

    { name: "Inception",categ:"movie", genre: "Sci-Fi", poster: "https://wallpaperaccess.com/full/1264689.jpg" },
    { name: "Interstellar",categ:"movie", genre: "Sci-Fi", poster: "https://wallpapercave.com/wp/wp1817968.jpg" },
    { name: "Tenet",categ:"movie", genre: "Sci-Fi", poster: "https://wallpapercave.com/wp/wp8512064.jpg" },
    { name: "The Matrix",categ:"movie", genre: "Sci-Fi", poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg" },
    { name: "The Running Man",categ:"movie", genre: "Sci-Fi", poster: "https://ih1.redbubble.net/image.5966564159.9323/fposter,small,wall_texture,square_product,600x600.jpg" },

    { name: "Joker",categ:"movie", genre: "Drama", poster: "https://wallpaperaccess.com/full/2116476.jpg" },
    { name: "Dark Knight",categ:"movie", genre: "Drama", poster: "https://wallpapercave.com/wp/wp2695399.jpg" },
    { name: "Dances with Wolves",categ:"movie", genre: "Drama", poster: "https://filmartgallery.com/cdn/shop/products/Dances-With-Wolves-Vintage-Movie-Poster-Original.jpeg?v=1738907492&width=1200" },
    { name: "Braveheart",categ:"movie", genre: "Drama", poster: "https://i.pinimg.com/originals/7e/3b/86/7e3b865434d846cdd62e2a3abe0a79f8.jpg" },
    { name: "Apocalypto",categ:"movie", genre: "Drama", poster: "https://i.pinimg.com/originals/53/e0/82/53e082d85ee44707cc78f2901557778e.jpg" },
    { name: "shiva",categ:"cartoon", genre: "action", poster: "https://wallpapers.com/images/hd/shiva-cartoon-title-ckkhkckm8ge2yduj.jpg" ,href:"https://youtu.be/Q-T2Bpl9Nl0?si=y2OS7iAu_5iR5VoP"},
    { name: "chota bheem",categ:"cartoon", genre: "action", poster: "https://w0.peakpx.com/wallpaper/887/268/HD-wallpaper-chota-bheem-team-chota-bheem-cartoon-animation-thumbnail.jpg", href:"https://youtu.be/lX3VsosZA70?si=s2E-B57O6Gbdagvn" },
    { name: "motupatlu",categ:"cartoon", genre: "action", poster: "./images/motupatlu.webp", href:"https://youtu.be/gwSX691bUag?si=QJyStSNRAo5viQhj" },
    { name: "arjun the prince of bali",categ:"cartoon", genre: "action", poster: "images/arjun.webp",href:"https://youtu.be/mMIwWAcMbRg?si=Y-sYaQSHhzah0fBK" },
    { name: "Adventures of Chhota Birbal",categ:"cartoon", genre: "action", poster: "images/birbal.webp" ,href:"https://www.youtube.com/playlist?list=PLJHHPzufWhuo5IU_P88MZwMzSCKCZ4BwZ"},
    { name: "kid krish",categ:"cartoon", genre: "action", poster: "./images/Kid Krrish.webp" ,href:"https://youtu.be/IVnIQDu7rRI?si=7WNsxcz7Emvmc0-5"},
    { name: "krishna balram",categ:"cartoon", genre: "action", poster: "./images/Krishna Balram.webp",href:"https://youtube.com/playlist?list=PL5vGYBRCB9YN0XS9ibnGlMRniPVMfnXAd&si=LbPqt7Akq1hnDmFM" },
    { name: "Jungle book",categ:"cartoon", genre: "action", poster: "./images/junglebook.webp" ,href:"https://youtu.be/zGzEd3I8pPM?si=H23t6bteEBVALJy3"},
    { name: "Game of Thrones",categ:"drama", genre: "action", poster: "./images/gameofthrones.webp"},
    { name: " Tulsa King",categ:"drama", genre: "action", poster: "./images/tulsa.webp" },
    { name: "The Family Man",categ:"drama", genre: "action", poster: "./images/familyman.webp" },
    { name: " Homeland",categ:"drama", genre: "action", poster: "./images/homeland.webp" },
``
];

function recommendMovies() {
    const input = document.getElementById("movieInput").value.trim().toLowerCase();
    const selectedMovie = movies.find(m => m.name.toLowerCase() === input);

    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    if (!selectedMovie) {
        document.getElementById("selectedMovie").innerText = "Movie not found 😥";
        return;
    }

    document.getElementById("selectedMovie").innerText =
        "movies similar to: " + selectedMovie.name;

    const recommended = movies.filter(
        m => m.genre === selectedMovie.genre && m.name !== selectedMovie.name&& m.categ===selectedMovie.categ
    );

    recommended.forEach(movie => {
        movieList.innerHTML += `
            <div class="card">
                <a href="#"><img src="${movie.poster}" /></a>
                <h3>${movie.name}</h3>
                <p>${movie.genre}</p>
            </div>
        `;
    });
}

//for sidebar
function showCategory(category) {
    const movieList = document.getElementById("movieList");
    const selectedMovie = document.getElementById("selectedMovie");

    movieList.innerHTML = "";
    selectedMovie.innerText = category.toUpperCase() + " LIST";

    const filtered = movies.filter(m => m.categ === category);

    if (filtered.length === 0) {
        movieList.innerHTML = "<p>No items found</p>";
        return;
    }

    filtered.forEach(movie => {
        movieList.innerHTML += `
            <div class="card">
               <a href="${movie.href ? movie.href : '#'}" target="_blank">
                <img src="${movie.poster}" />
            </a>
            <h3>${movie.name}</h3>
            <p>${movie.genre}</p>
            </div>
        `;
    });
}
