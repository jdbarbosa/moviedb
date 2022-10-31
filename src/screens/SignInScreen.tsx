import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuthContext } from "../context/AuthProvider";

const SignInScreen = () => {

   const { isLoggedIn, setIsLoggedIn } = useAuthContext()

   console.log(isLoggedIn)

   const login = () => {
    setIsLoggedIn(true)
    console.log(isLoggedIn)
   }

    return (
        <View>
            <Text>This is a dummy sign screen</Text>
            <Button
                onPress={ login }
                title="Sign In"
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SignInScreen;