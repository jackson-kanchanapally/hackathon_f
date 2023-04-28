import React from 'react'
import {Link} from 'react-router-dom'
import { Stack,Divider,Button } from '@chakra-ui/react'
export default function Side() {
  return (
    <Stack direction='column'>
     <Link to='/'>  <Button width='100%'> Dashboard</Button></Link>
        <Divider />
        <Divider />
     <Link to='/register'>  <Button width='100%'> Register New Student</Button></Link>
        <Divider />
        <Divider />
        <Link to='/table'>  <Button width='100%'> Registered Students</Button></Link>
        {/* <Heading>hello</Heading> */}
        <Divider /> 
    </Stack>
  )
}
