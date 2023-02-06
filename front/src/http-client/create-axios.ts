import axios, { CreateAxiosDefaults } from "axios"

export const createAxios = (providedConfig?: CreateAxiosDefaults<any>) => {
  const config = createConfig(providedConfig)
  return axios.create(config)
}

const createConfig = (config?: CreateAxiosDefaults) => {
  if (!config) {
    return {headers: createHeaders()}
  }
  return {...config, headers: createHeaders(config.headers)}
}

const createHeaders = (headers?: object) => {
  const defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
  }
  if (headers) {
    return {...headers, ...defaultHeaders}
  }
  return defaultHeaders
}