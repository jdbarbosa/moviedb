import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Movie } from "../model/Movie";
import { GenreId } from "../model/GenreId";

const MovieCell = (movie: Movie) => {

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
    
    
    const genreString = movie.genre_ids ? movie.genre_ids.map(id => genreName(id)).join(", ") : ''

    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w154/${movie.poster_path}` }}
            />
            <View style={styles.textBox}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.description}> {movie.release_date} | {genreString}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textBox: {

    },
    image: {
        width: 100,
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
        marginRight: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    description: {

    }
})

export default MovieCell