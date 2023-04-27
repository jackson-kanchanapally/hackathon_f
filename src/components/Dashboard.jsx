import { Box, Flex, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import Chart from './Chart'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatGroup,
    Grid,
    GridItem,
  } from '@chakra-ui/react'
import Formk from './Form'

export default function Dash() {
  const url="/api/data/val"
  const [Data,setData]=React.useState([])
  React.useEffect(()=>{
     const fetchData=async()=>{
      try{
          const res=await fetch(url)
          const js= await res.json()
          
          if(res.ok)
          {
              setData(js)
              
          }
  
      }
      catch(err){
          console.log(err)
      }
     }
      fetchData()
  },[])
  let cse=0 
  let ece=0
  let ce=0
  let mech=0
  let eee=0
cse=parseInt(Data.filter((val)=>val._id==='cse').map((val)=>val.count))
 ece=parseInt(Data.filter((val)=>val._id==='ece').map((val)=>val.count))
 ce=parseInt(Data.filter((val)=>val._id==='ce').map((val)=>val.count))
 mech=parseInt(Data.filter((val)=>val._id==='mech').map((val)=>val.count))
 eee=parseInt(Data.filter((val)=>val._id==='eee').map((val)=>val.count))
 if(isNaN(cse))
 {
  cse=0
 }
 if(isNaN(ece))
 {
  ece=0
 }
 if(isNaN(eee))
 {
  eee=0
 }
 if(isNaN(ce))
 {
  ce=0
 }
 if(isNaN(mech))
 {
  mech=0
 }
const total=cse+ece+ce+mech+eee

const propVals={
  cse:cse,
  ece:ece,
  ce:ce,
  mech:mech,
  eee:eee,
}
  return (
   <Grid
  h='95vh'
 
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
<GridItem rowSpan={2} colSpan={1} bg='gray.50' >
  <Formk/>
  </GridItem>
    {/* <Stack direction={'column'}> */}

    <GridItem colSpan={1} bg='gray.50' borderRadius='lg'>
      {/* <StatGroup>
       <Box my='10' mx='0' borderRadius="lg" bg='gray.50' h='40%' w='25%' > */}
  <Stat pl='20%' py='10%'>
    <StatLabel>Total Students</StatLabel>
    <StatNumber fontSize='70'>{total<10?'0'+total:total}</StatNumber>
    
  </Stat>
  </GridItem>
    <GridItem colSpan={1} bg='gray.50' borderRadius='lg'>
      {/* <StatGroup>
       <Box my='10' mx='0' borderRadius="lg" bg='gray.50' h='40%' w='25%' > */}
  <Stat pl='20%' py='10%'>
    <StatLabel>Total Students</StatLabel>
    <StatNumber fontSize='70'>{total<10?'0'+total:total}</StatNumber>
    
  </Stat>
  </GridItem>
    <GridItem colSpan={1} bg='gray.50' borderRadius='lg'>
      {/* <StatGroup>
       <Box my='10' mx='0' borderRadius="lg" bg='gray.50' h='40%' w='25%' > */}
  <Stat pl='20%' py='10%'>
    <StatLabel>Total Students</StatLabel>
    <StatNumber fontSize='70'>{total<10?'0'+total:total}</StatNumber>
    
  </Stat>
  </GridItem>  
    <GridItem colSpan={3} bg='gray.50' borderRadius='lg'>

        {Data&&<Chart prop={propVals}/>}

    </GridItem>
    {/* </Stack> */}
    </Grid>
  )
}
