import { Fragment } from 'react/jsx-runtime'
import LoginModel from './components/Login/LoginModel'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Fragment>
      <Sidebar />
      <LoginModel />
    </Fragment>
  )
}

export default App
