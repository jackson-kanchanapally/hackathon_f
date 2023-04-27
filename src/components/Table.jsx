import {
    Table,
    Thead,
    Tr,
    Th,
    Td,
    TableContainer,
    Tbody,
    Center,
  } from '@chakra-ui/react'
  import {React,useEffect,useState} from 'react'
import Honey from './DataFetch'
const url="/api/data"
  function Tables() {
    const [data,setData]=useState([])
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res=await fetch(url)
            const js= await res.json()
            
            if(res.ok)
            {
                setData(js)
                console.log(js)
            }
    
        }
        catch(err){
            console.log(err)
        }
       }
        fetchData()
    },[])
    return (
      <Center>
        <TableContainer width='80vw'>
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
      </Tr>
    </Thead>
      <Tbody>
      {data&&data.map((i)=>(
            
            <Tr key={i._id}>
                <Td>{i.fname.charAt(0).toUpperCase() + i.fname.slice(1)+" "+i.lname.charAt(0).toUpperCase() + i.lname.slice(1)}</Td>
                <Td>{i.mothname.charAt(0).toUpperCase() + i.mothname.slice(1)}</Td>
                <Td>{i.fathname.charAt(0).toUpperCase() + i.fathname.slice(1)}</Td>
                <Td>{i.email}</Td>
                <Td>{i.dob}</Td>
                <Td>{i.phonenum}</Td>
               <Td>{i.branch.toUpperCase()}</Td>
            </Tr>
            
        ))}
      </Tbody>
  </Table>
</TableContainer>
      </Center>
    )
  }
  
  export default Tables