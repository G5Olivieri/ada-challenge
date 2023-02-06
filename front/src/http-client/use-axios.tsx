import { useContext } from 'react'
import { AxiosContext } from './axios-context'

export const useAxios = () => {
  return useContext(AxiosContext)
}
