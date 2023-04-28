import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom'
import {React} from 'react'
// import Honey from './components/DataFetch';
import { ChakraProvider } from '@chakra-ui/react'
// import Dash from './components/Dashboard';
import Dash from './pages/Home'
import Formk from './components/Form';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import Tables from './components/Table';

function App() {
  const {user} =useAuthContext()
return(
<ChakraProvider>
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route
  path='/'
  element={user?<Dash/>:<Navigate to='/login'></Navigate>}
  />
  <Route
  path='/register'
  element={user?<Formk/>:<Navigate to='/login'></Navigate>}
  />
  <Route
  path='/table'
  element={user?<Tables/>:<Navigate to='/login'></Navigate>}
  />
  <Route
  path='/login'
  element={!user?<Login/>:<Navigate to='/' />}
  />
  <Route
  path='/signup'
  element={!user?<Signup/>:<Navigate to='/' />}
  >
  
  </Route>
  <Route path='/form' element={<Formk/>}/>
  </Routes>
 </BrowserRouter>
</ChakraProvider>
)

}

export default App;

