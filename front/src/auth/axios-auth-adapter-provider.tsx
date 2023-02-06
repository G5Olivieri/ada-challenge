import { PropsWithChildren } from "react"
import { useAxios } from "../http-client/use-axios"
import { useAuth } from "./use-auth"

export type AxiosAuthAdapter = PropsWithChildren

export const AxiosAuthAdapter: React.FC<AxiosAuthAdapter> = ({ children }) => {
  const { token, setIsAuthenticated, setToken } = useAuth()
  const axios = useAxios()

  axios.interceptors.request.use((config) => {
    config.headers.set('Authorization', `Bearer ${token}`)
    return config
  })

  axios.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if(error.response.status === 401) {
      setToken('')
      setIsAuthenticated(false)
    }
    return error
  })

  return (
    <>{children}</>
  )
}