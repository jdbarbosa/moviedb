import React, { useState, useCallback } from 'react';
import { ActivityIndicator,
    FlatList, 
    View, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity,
    Button } from 'react-native';
import { Movie } from '../model/Movie';
import MovieCell from '../components/MovieCell';
import { useNavigation } from '@react-navigation/native';
import useMovieList from '../hooks/useMovieList';
import { useAuthContext } from '../context/AuthProvider';

export type MovieResponse = {
    page: number
    results: [Movie]
}

const MovieListScreen = () => {

    const navigation = useNavigation()
    const [isLoading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const { setIsLoggedIn } = useAuthContext()
    
    const callback = useCallback(
        (isLoading: boolean, errorMessage: string) => {
            setLoading(isLoading)
            setErrorMessage(errorMessage)
        },
        [searchTerm]
    )

    const logout = () => {
        setIsLoggedIn(false)
       }

    const [data] = useMovieList(searchTerm, callback)
    return (
        <>
            <View style={styles.container}>
            <Button
                onPress={ logout }
                title="Sign Out"
            />
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