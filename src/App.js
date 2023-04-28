import './App.css';
import {React,useState} from 'react'
import Chart from './components/Chart';
import Honey from './components/DataFetch';
import { ChakraProvider, Table } from '@chakra-ui/react'
// import Dash from './components/Dashboard';
import Dash from './pages/Home'
import Formk from './components/Form';
import Tables from './components/Table';
import Login from './components/Login';


function App() {
return(
<ChakraProvider>
  {/* <Honey/> */}
  {/* <Dash/> */}
<Dash/>
  {/* <Login/> */}
  <Tables/>
</ChakraProvider>
)

}

export default App;

