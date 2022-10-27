import React, { useEffect, useState, useCallback } from 'react';
import { ActivityIndicator, FlatList, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Movie } from '../model/Movie';
import { movieDbInstance, imageServiceInstance } from '../api/movieDbApi'
import MovieCell from '../components/MovieCell';
import { useNavigation } from '@react-navigation/native';
import useMovieList from '../hooks/useMovieList';

export type MovieResponse = {
    page: number
    results: [Movie]
}

const MovieListScreen = () => {

    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    //const [data, setData] = useState<Array<Movie>>([]);

    const callback = useCallback(
        (isLoading: boolean, errorMessage: string) => {
            setLoading(isLoading)
            setErrorMessage(errorMessage)
        },
        [searchTerm]
    )

    const [data] = useMovieList(searchTerm, callback)



    return (
        <>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={setSearchTerm}
                    value={searchTerm}
                    placeholder='Search movie'
                />
                {isLoading ? <ActivityIndicator /> : (
                    <>
                        <FlatList
                            data={data}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', item)}>
                                    <MovieCell {...item} />
                                </TouchableOpacity>
                            )}
                        />
                    </>
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 8
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderRadius: 8
    },
});

export default MovieListScreen;