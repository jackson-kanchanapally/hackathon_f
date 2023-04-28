import { Box, HStack } from '@chakra-ui/react'
import React from 'react'
import { useWebContext } from '../hooks/useWebContext'
import { useAuthContext } from '../hooks/useAuthContext'
import Chart from '../components/Chart'
import {
    Stat,
    StatLabel,
    StatNumber,
    Spinner,
    Grid,
    StatHelpText,
    StatArrow,
    GridItem,
  } from '@chakra-ui/react'

import Side from '../components/Side'



export default function Dash() {
 const {Data,dispatch}=useWebContext()
  const {user}=useAuthContext()
  const url="/api/data/val"
  //  const [Data,setData]=React.useState([])
  const [load,setLoad]=React.useState(true)
  React.useEffect(()=>{
     const fetchData=async()=>{
      try{
          const res=await fetch(url,{
            headers:{
              'Authorization':`Bearer ${user.token}`
            }
          })
          const js= await res.json()
          
          if(res.ok)
          {
              // dispatch({type:'SET_DASH_DATA',payload:js})
              // setData(js)
              dispatch({type:'SET_DATA',payload:js})
              setLoad(false)

          }
  
      }
      catch(err){
          console.log(err)
      }
     }
      if(user){
        fetchData()
      }
  },[dispatch,user])
  let cse=0 
  let ece=0
  let ce=0
  let mech=0
  let eee=0
  let it=0
cse=parseInt(Data.filter((val)=>val._id==='cse').map((val)=>val.count))
 ece=parseInt(Data.filter((val)=>val._id==='ece').map((val)=>val.count))
 ce=parseInt(Data.filter((val)=>val._id==='ce').map((val)=>val.count))
 mech=parseInt(Data.filter((val)=>val._id==='mech').map((val)=>val.count))
 eee=parseInt(Data.filter((val)=>val._id==='eee').map((val)=>val.count))
 it=parseInt(Data.filter((val)=>val._id==='it').map((val)=>val.count))
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
 if(isNaN(it))
 {
  it=0
 }
 const total=cse+ece+ce+mech+eee
 let csePer= (cse / total) * 100
 let ecePer= (ece / total) * 100
 let eeePer= (eee / total) * 100
 let itPer= (it / total) * 100
 let mechPer= (mech / total) * 100
 let cePer= (ce / total) * 100
let max = 'cse';
let maxPer=csePer
if (ece > max) {
  max = 'ece';
  maxPer=ecePer
}

if (eee > max) {
  max = 'eee';
  maxPer=eeePer
}

if (ce > max) {
  max = 'ce';
  maxPer=cePer
}

if (mech > max) {
  max = 'mech';
  maxPer=mechPer
}
if (it > max) {
  max = 'it';
  maxPer=itPer
}
const propVals={
  cse:cse,
  ece:ece,
  ce:ce,
  mech:mech,
  eee:eee,
  it:it,
}
  return (
    <>
   <Grid
  h='95vh'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={3}
 
>
<GridItem rowSpan={2} colSpan={1} bg='gray.50' >
  <Side/>
  {/* <Formk/> */}
  </GridItem>

    <GridItem colSpan={1} bg='gray.50' borderRadius='3xl' mt='30' mr='10'>

  <Stat pl='20%' py='10%'>
    <StatLabel>Total Students</StatLabel>
    <StatNumber fontSize='70'>{total<10?'0'+total:total}</StatNumber>
    
  </Stat>
  </GridItem>
    <GridItem colSpan={1} bg='gray.50' borderRadius='3xl' mt='30' mr='10'>
  
  <Stat pl='20%' py='10%'>
    <StatLabel>Most Choosen</StatLabel>
    <StatNumber fontSize='60'>{max.toUpperCase()}</StatNumber>
    <StatHelpText>
      <HStack>
      <StatArrow type='increase'/>
      <Box fontWeight='semibold' fontSize={'20'}>{maxPer.toFixed(2)+"%"}</Box>
      </HStack>
    </StatHelpText>
  </Stat>
  </GridItem>
    <GridItem colSpan={1} bg='gray.50' borderRadius='3xl' mt='30' mr='10'>
  
  <Stat pl='20%' py='10%'>
    <StatLabel>Total Students</StatLabel>
    <StatNumber fontSize='70'>{total<10?'0'+total:total}</StatNumber>
    
  </Stat>
  </GridItem>  
    <GridItem colSpan={3} bg='gray.50' borderRadius='3xl' mt='30'mr='10'>

        {load?
        <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
        mx='45%'
         mt='30'
      />
        :<Chart prop={propVals}/>}

    </GridItem>

    </Grid>
    </>
  )
}
