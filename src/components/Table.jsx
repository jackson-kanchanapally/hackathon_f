import {
    Table,
    Thead,
    Tr,
    Th,
    Td,
    TableContainer,
    Tbody,
    Center,
    Button,
 
  } from '@chakra-ui/react'
  import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
  import {React,useEffect,useState} from 'react'
  import { useWebContext } from '../hooks/useWebContext'
import Honey from './DataFetch'
import Login from './Login'
const url="/api/data"
  function Tables() {
     const {Data,dispatch}=useWebContext()
    // const [data,setData]=useState([])

    const[del,setDel]=useState(false)
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res=await fetch(url)
            const js= await res.json()
            
            if(res.ok)
            {
                // setData(js)
                dispatch({type:'SET_DATA',payload:js})
            }
    
        }
        catch(err){
            console.log(err)
        }
       }
        fetchData()
    },[dispatch])
    const handleDelete=async(id)=>{
      const res=await fetch('/api/data/'+id,{
        method:'DELETE'
      })
      const js=await res.json()
      if(res.ok){
        dispatch({type:'DELETE_DATA',payload:js})
        setDel(true)
      }
    }
  const upId=(id)=>{
    return id
  }
  
    return (
      <Center>
        <TableContainer width='90vw' mt='20' mb='20'>
  <Table variant='striped' colorScheme='gray' >
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr colorScheme='blue'
      color={'red'}>
        <Th>Name</Th>
        <Th>Mother name</Th>
        <Th>Father name</Th>
        <Th>Email</Th>
        <Th>DOB</Th>
        <Th>Mobile no</Th>
        <Th>Branch</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
      <Tbody>
      {Data&&Data.map((i)=>(
            
            <Tr key={i._id}>
                <Td>{i.fname.charAt(0).toUpperCase() + i.fname.slice(1)+" "+i.lname.charAt(0).toUpperCase() + i.lname.slice(1)}</Td>
                <Td>{i.mothname.charAt(0).toUpperCase() + i.mothname.slice(1)}</Td>
                <Td>{i.fathname.charAt(0).toUpperCase() + i.fathname.slice(1)}</Td>
                <Td>{i.email}</Td>
                <Td>{i.dob}</Td>
                <Td>{i.phonenum}</Td>
               <Td>{i.branch.toUpperCase()}</Td>
              <Td> <Button onClick={()=>{handleDelete(i._id)}}>Delete</Button > <Button onClick={()=>{upId(i._id)}}>Update</Button></Td>
            </Tr>
            
        ))}
      </Tbody>
  </Table>
</TableContainer>
       form {upId}
      </Center>

    )
  }
  
  export default Tables