import { AxiosInstance, CreateAxiosDefaults } from "axios"
import { PropsWithChildren } from "react"
import { AxiosContext } from "./axios-context"
import { createAxios } from "./create-axios"

type AxiosProviderProps = {
  axios?: AxiosInstance
  config?: CreateAxiosDefaults
} & PropsWithChildren

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ axios, config, children }) => {
  const instance = axios ?? createAxios(config)
  return (
    <AxiosContext.Provider value={instance}>
      {children}
    </AxiosContext.Provider>
  )
}