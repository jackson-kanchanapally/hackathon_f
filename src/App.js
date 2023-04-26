import './App.css';
import {React,useState} from 'react'
import Chart from './components/Chart';
import Honey from './components/DataFetch';
import { ChakraProvider } from '@chakra-ui/react'
import Dash from './components/Dashboard';

import Formk from './components/Form';

function App() {
return(
<ChakraProvider>
  {/* <Honey/> */}
  <Dash/>
  {/* <Formk/> */}
</ChakraProvider>
)

}

export default App;

