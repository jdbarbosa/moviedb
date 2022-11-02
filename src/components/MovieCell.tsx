import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Movie } from "../model/Movie";
import { genreString } from "../model/Movie";

const MovieCell = (movie: Movie) => {
    
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={{ uri: `https://image.tmdb.org/t/p/w154/${movie.poster_path}` }}
            />
            <View style={styles.textBox}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.description}> {movie.release_date} | {genreString(movie)}</Text>
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