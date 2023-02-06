import { PropsWithChildren } from "react"
import { AuthContext, AuthContextType } from "./auth-context"
import { useAuthService } from "./use-auth-service"

type AuthProviderProps = {
  auth?: AuthContextType
} & PropsWithChildren

export const AuthProvider: React.FC<AuthProviderProps> = ({children, auth }) => {
  const authService = auth ?? useAuthService()

  return (
  <AuthContext.Provider value={authService}>
    {children}
  </AuthContext.Provider> 
  )
}