import * as api from "./api.js";

const endpoints = {
    'movies': '/data/movies',
    'movieById': '/data/ideas/',
    'create': '/data/movies ',
}

export async function getAllMovies() {
    return api.get(endpoints.movies);
}

export async function getById(id) {
   return api.get(endpoints.movieById + id);
}

export async function createMovie(movieData) {
    return api.post(endpoints.create, movieData)
}

export async function deleteById(id){
    return api.delete(endpoints.movieById + id)
}