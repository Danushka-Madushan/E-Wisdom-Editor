import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { useAuth } from './hooks/useAuth';
import Sidebar from './components/Sidebar/Sidebar'
import Students from './pages/Students';
import Subscriptions from './pages/Subscriptions';
import Courses from './pages/Courses';
import Videos from './pages/Videos';
import Dashboard from './pages/Dashboard';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import LoginModel from './components/Login/LoginModel';
import toast, { useToasterStore } from 'react-hot-toast';
import { useEffect } from 'react';
import { TOAST_LIMIT } from './config/config';

const Routers = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/students',
    element: <Students />
  },
  {
    path: '/subscriptions',
    element: <Subscriptions />
  },
  {
    path: '/courses',
    element: <Courses />
  },
  {
    path: '/videos',
    element: <Videos />
  }
]

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className='flex'>
      <BrowserRouter>.
        {isAuthenticated && <div className='h-screen'>
          <Sidebar />
        </div>}
        <Routes>
          <Route path="/login" element={<LoginModel />} />
          {Routers.map(({ path, element }, i) => <Route key={i} path={path} element={<ProtectedRoute element={element}/>} />)}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const ProtectedApp = () => {
  /* Obtained From https://github.com/timolins/react-hot-toast/issues/31#issuecomment-803359550 */
  const { toasts } = useToasterStore();
  
  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= TOAST_LIMIT) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts]);
  
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default ProtectedApp
