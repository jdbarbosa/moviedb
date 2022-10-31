import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen";
import MovieDetailScreen from "./screens/MovieDetailScreen";
import { NavigationContainer } from '@react-navigation/native';
import { Movie } from "./model/Movie";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { useAuthContext } from "./context/AuthProvider";

const MainStack = createStackNavigator()
const AuthStack = createStackNavigator()
const RootStack = createStackNavigator()

export type MainStackParamList = {
    MovieListScreen: undefined;
    MovieDetailScreen: Movie
};

const AuthFlowStack = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignInScreen} />
            <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        </AuthStack.Navigator>
    );
}


const MovieFlowStack = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="MovieList" component={MovieListScreen} />
            <MainStack.Screen name="MovieDetail" component={MovieDetailScreen} />
        </MainStack.Navigator>
    );
}

const Root: React.FC<MainStackParamList> = () => {
    const { isLoggedIn } = useAuthContext()

    console.log(`root ${isLoggedIn}`)

    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                {
                    !isLoggedIn ? <RootStack.Screen name='AuthFlow' component={AuthFlowStack} />
                        : <RootStack.Screen name='MovieFlow' component={MovieFlowStack} />
                }
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default Root