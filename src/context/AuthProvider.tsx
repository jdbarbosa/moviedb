import { createContext, useContext } from "react"

export type Auth = {
  isLoggedIn: boolean
  setIsLoggedIn:(loggedIn: boolean) => void
}

export const AuthContext = createContext<Auth>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
})

export const useAuthContext = () => useContext(AuthContext)
