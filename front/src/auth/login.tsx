import { useForm } from "react-hook-form"
import { useAuth } from "./use-auth"
import { useAxios } from "../http-client/use-axios"

type LoginProps = {

}

type FormType = {
  username: string
  password: string
}

export const Login: React.FC<LoginProps> = () => {
  const axios = useAxios()
  const {setToken, setIsAuthenticated} = useAuth()
  const {handleSubmit, register} = useForm<FormType>() 

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, data)
    setToken(response.data.access_token as string)
    setIsAuthenticated(true)
  })

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="usuário" {...register('username', { required: true })}/>
      <input type="password" placeholder="senha" {...register('password', { required: true })}/>
      <button>Enviar</button>
    </form>
  )
}