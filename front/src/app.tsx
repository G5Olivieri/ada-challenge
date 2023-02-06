import { AuthProvider } from './auth/auth-provider'
import { AxiosAuthAdapter } from './auth/axios-auth-adapter-provider'
import { AuthGuard } from './auth/auth-guard'
import { useLocalStorageAuthService } from './auth/use-local-storage-auth-service'
import { AxiosProvider } from './http-client/axios-provider'
import { Home } from './page/home'
import GlobalStyle from './style/global'

function App() {
  const auth = useLocalStorageAuthService()

  return (
    <AxiosProvider>
      <AuthProvider auth={auth}>
        <AuthGuard>
          <AxiosAuthAdapter>
            <Home />
            <GlobalStyle />
          </AxiosAuthAdapter>
        </AuthGuard>
      </AuthProvider>
    </AxiosProvider>
  )
}

export default App
