import { HStack,Button, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
    const handleClick = () => {
      logout()
    }
  
  return (
    <HStack justifyContent={'end'} bgColor='gray.50'>
        
      <Box>
      {user&&(<Button mt='2' mb='2' mr='10' onClick={handleClick}>Logout</Button>)}
        {!user&&(<div>
          <Button mt='2' mb='2' mr='10'><Link  to='/login'>Login</Link></Button>
          <Button mt='2' mb='2' mr='10'><Link to='/signup'>Sign up</Link></Button>
          </div>)}
      </Box>
    </HStack>
  )
}
