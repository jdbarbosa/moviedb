import React, { useEffect, useState } from "react";
import { Movie } from "../model/Movie";
import { MovieResponse } from "../screens/MovieListScreen";
import { movieDbInstance } from "../api/movieDbApi";

const useMovieList = (searchTerm: string, 
                    callback: (isLoading: boolean, errorMessage: string) => void) => {

    const [data, setData] = useState<Array<Movie>>([]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm === '') {
                discover()
            } else {
                search()
            }
        }, 500)
        return () => clearTimeout(delayDebounce)
    }, [searchTerm]);

    const search = async () => {
        callback(true, '')
        try {
            const { data } = await movieDbInstance.get('search/movie', {
                params: {
                    'api_key': '181af7fcab50e40fabe2d10cc8b90e37',
                    'query': searchTerm
                }
            })
            callback(false, '')
            setData(data.results)
        } catch (error) {
            console.error(error);
            callback(false, 'Something went wrong')
        }
    }

    const discover = async () => {
        callback(true, '')
        try {
            const { data } = await movieDbInstance.get('discover/movie', {
                params: { 'api_key': '181af7fcab50e40fabe2d10cc8b90e37' }
            })
            setData(data.results)
            callback(false, '')
        } catch (error) {
            console.error(error);
            callback(false, 'Something went wrong')
        }
    }

    return [data, search, discover]
}

export default useMovieList