import { createContext, ReactNode, useState } from 'react'

export const AuthContext = createContext<{
  isAuthenticated?: boolean,
  login?: () => void,
  logout?: () => void,
  authHeaders?: {
    token: string
  }
}>({})

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
