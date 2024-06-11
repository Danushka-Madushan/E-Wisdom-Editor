import { useAuth } from '../hooks/useAuth';
import { Fragment, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ element }: { element: ReactNode }) => {
  const AuthContext = useAuth();
  const Navigate = useNavigate()

  useEffect(() => {
    if (!AuthContext || !AuthContext.isAuthenticated) {
      return Navigate('/login', { replace: true })
    }
  }, [Navigate, AuthContext])

  return (
    <Fragment>{element}</Fragment>
  )
}

export default ProtectedRoute
