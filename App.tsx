/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState } from "react";
import { AuthContext } from "./src/context/AuthProvider";
import Root from "./src/Root";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  return (
    <AuthContext.Provider value = {{ isLoggedIn, setIsLoggedIn }}>
      <Root />
    </AuthContext.Provider>
  );
}

export default App