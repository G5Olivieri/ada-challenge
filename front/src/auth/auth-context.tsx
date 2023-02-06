import { createContext } from "react"
import { Consumer } from "./consumer"

export type AuthContextType = {
  token: string,
  setToken: (token: string) => void,
  isAuthenticated: boolean,
  setIsAuthenticated: (authenticated: boolean) => void,
  onAuthenticated: (consumer: Consumer<boolean>) => void
  onToken: (consumer: Consumer<string>) => void
}

export const AuthContext = createContext<AuthContextType>(null!)
