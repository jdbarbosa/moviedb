import axios from "axios";

const movieDbInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

const imageServiceInstance = axios.create({
    baseURL: 'https://image.tmdb.org/t/p/w154/'
})

export { movieDbInstance, imageServiceInstance }