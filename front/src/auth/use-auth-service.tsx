import { useState } from "react"
import { AuthContextType } from "./auth-context"
import { Consumer } from "./consumer"

export const useAuthService = (): AuthContextType => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState('')

  let onAuthenticatedConsumers: Consumer<boolean>[] = []
  let onTokenConsumers: Consumer<string>[] = []

  const onAuthenticated = (c: Consumer<boolean>) => {
    onAuthenticatedConsumers.push(c)
  }

  const onToken = (c: Consumer<string>) => {
    onTokenConsumers.push(c)
  }

  return {
    isAuthenticated,
    setIsAuthenticated: (value: boolean) => {
      setIsAuthenticated(value)
      onAuthenticatedConsumers.forEach(c => c(value))
    },
    onAuthenticated,
    onToken,
    token,
    setToken: (value: string) => {
      setToken(value)
      onTokenConsumers.forEach(c => c(value))
    },
  }
}
