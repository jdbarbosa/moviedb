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