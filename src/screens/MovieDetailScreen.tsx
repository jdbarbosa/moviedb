import React from "react";
import { StyleSheet, Text } from "react-native";
import { Movie } from "../model/Movie";
import {RouteProp} from '@react-navigation/core';
import { MainStackParamList } from "../../App";
import {StackNavigationProp} from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type ScreenNavigationProp<T extends keyof MainStackParamList> = StackNavigationProp<MainStackParamList, T>;
type ScreenRouteProp<T extends keyof MainStackParamList> = RouteProp<MainStackParamList, T>;
type Props<T extends keyof MainStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};

type MovieDetailProps = NativeStackScreenProps<MainStackParamList, 'MovieDetailScreen'>;

//const MovieDetailScreen: React.FC<Props<'MovieDetailScreen'>> = ({ route }) => {
function MovieDetailScreen({ route, navigation }: MovieDetailProps) {
    const movie = route.params
    return (
        <>
        <Text>{movie.title}</Text>
        <Text>{movie.overview}</Text>
        </>
    )
}

const styles = StyleSheet.create({});

export default MovieDetailScreen;