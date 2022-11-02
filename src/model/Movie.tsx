import { GenreId } from "./GenreId"

export type Movie = {
    id: number
    title: string
    overview?: string
    poster_path?: string
    vote_average: number
    release_date?: string
    genre_ids?: [GenreId]

}

export function genreString(movie: Movie) {
    return movie.genre_ids ? movie.genre_ids.map(id => genreName(id)).join(", ") : ''
}

function genreName(genreId: GenreId) {
    switch (genreId) {
        case GenreId.action: return 'Action'                
        case GenreId.animation: return 'Animation'
        case GenreId.comedy: return 'Comedy'
        case GenreId.crime: return 'Crime'
        case GenreId.documentary: return 'Documentary'
        case GenreId.drama: return 'Drama'
        case GenreId.family: return 'Family'
        case GenreId.fantasy: return 'Fantasy'
        case GenreId.history: return 'History'
        case GenreId.horror: return 'Horror'
        case GenreId.music: return 'Music'
        case GenreId.mystery: return 'Mystery'
        case GenreId.romance: return 'Romance'
        case GenreId.scienceFiction: return 'Science Fiction'
        case GenreId.tvMovie: return 'TV Movie'
        case GenreId.thriller: return 'Thriller'
        case GenreId.war: return 'War'
        case GenreId.western: return 'Western'
        default:
            return ''
    }
}