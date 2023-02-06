import { PropsWithChildren } from "react"
import { Login } from "./login"
import { useAuth } from "./use-auth"

type AuthGuardProps = PropsWithChildren

export const AuthGuard: React.FC<AuthGuardProps> = ({children}) => {
  const {isAuthenticated} = useAuth()
  if (isAuthenticated) {
    return <>{children}</>
  }
  return <Login />
}