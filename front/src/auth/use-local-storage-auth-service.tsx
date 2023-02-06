import { useEffect } from "react"
import { useAuthService } from "./use-auth-service"

export const useLocalStorageAuthService = () => {
  const authService = useAuthService()
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    if (token) {
      authService.setToken(token)
      authService.setIsAuthenticated(true)
    }

    authService.onToken((token) => {
      if (token === '') {
        localStorage.removeItem('access_token')
        return
      }
      localStorage.setItem('access_token', token)
    })
  }, [])

  return authService
}