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
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  )
}

export default ProtectedApp
