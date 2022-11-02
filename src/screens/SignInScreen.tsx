import React, { useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAuthContext } from "../context/AuthProvider";

const SignInScreen = () => {

    const { setIsLoggedIn } = useAuthContext()

    const login = useCallback(() => {
        setIsLoggedIn(true)
    })

    return (
        <View>
            <Text>This is a dummy sign screen</Text>
            <Button
                onPress={login}
                title="Sign In"
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default SignInScreen;