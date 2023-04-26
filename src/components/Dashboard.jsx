import { Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Chart from './Chart'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
export default function Dash() {
  return (
    <Stack>
       <Box my='10' mx='10' borderRadius="lg" bg='gray.50' h='40%' w='30%' >
       <StatGroup>
  <Stat pl='20%' py='10%'>
    <StatLabel>Sent</StatLabel>
    <StatNumber fontSize='70'>345,670</StatNumber>
    
     
  </Stat>
  </StatGroup>
       </Box>
     <Flex>
     <Box bg='gray.50'>
        <Chart/>
       </Box>
       <Box>
        <Chart/>
       </Box>
     </Flex>
    </Stack>
  )
}
