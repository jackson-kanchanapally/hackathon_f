import './App.css';
import {React,useState} from 'react'
import Chart from './components/Chart';
import Honey from './components/DataFetch';
import { ChakraProvider, Table } from '@chakra-ui/react'
import Dash from './components/Dashboard';

import Formk from './components/Form';
import Tables from './components/Table';


function App() {
return(
<ChakraProvider>
  {/* <Honey/> */}
  <Dash/>

  {/* <Formk/>
  <Tables/> */}
</ChakraProvider>
)

}

export default App;

