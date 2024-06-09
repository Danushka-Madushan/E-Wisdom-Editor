import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar'
import Students from './pages/Students';
import Subscriptions from './pages/Subscriptions';
import Courses from './pages/Courses';
import Videos from './pages/Videos';
import Dashboard from './pages/Dashboard';

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
  return (
    <div className='flex'>
      <BrowserRouter>
        <div className='h-screen'>
          <Sidebar />
        </div>
        <Routes>
          {Routers.map(({ path, element }, i) => <Route key={i} path={path} element={element} />)}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
