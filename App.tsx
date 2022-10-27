/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./src/screens/MovieListScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";
import { NavigationContainer } from '@react-navigation/native';
import { Movie } from "./src/model/Movie";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

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

const App: React.FC<MainStackParamList> = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
          screenOptions={{
            headerShown: false
          }}>
        {
          false ? <RootStack.Screen name='AuthFlow' component={AuthFlowStack} />
            : <RootStack.Screen name='MovieFlow' component={MovieFlowStack} />
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App