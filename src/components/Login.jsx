import React from 'react'
import {
     FormControl,
     FormLabel,
     Input,
     Image,
     HStack,
     Box,
     Center,
     Button,Text
} from '@chakra-ui/react'
  import * as Yup from 'yup';
  import { Field, Form, Formik,ErrorMessage } from 'formik';
  import { Link } from 'react-router-dom'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
 import { useLogin } from '../hooks/useLogin';
function Login() {
  const {login,error,isLoading}=useLogin()
    const  initialValues={
        email:'',
        pass:'',
        }
        const onSubmit=async(val,{resetForm})=>{
          console.log(val.email+"  "+val.pass)
           await login(val.email,val.pass)
        }
        const validationSchema = Yup.object().shape({
           
           
            
            email: Yup.string().email('Invalid email').required('Email is required'),
            pass: Yup.string().required('password must contain minimum characters'),
          });
  return (

        <HStack spacing='24px'>
  <Box mb='300'
     mt='250'
     ml='15%' mr='20'>
    <Center>
     <Image width={'35vw'}
     
    src='login1.png' alt='Dan Abramov' />
    </Center>
    </Box>

    <Box bg='gray.50' width={400}  mb='300' mr>
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({errors,touched, form})=>(
          <Form>
            <Field name="email">
              {({ field }) => (
                 <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type='email' {...field} id="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                </FormControl>
              )}
            </Field>
            <Field name="pass">
              {({ field }) => (
                 <FormControl isInvalid={errors.pass && touched.pass}>
                  <FormLabel htmlFor="pass">Password</FormLabel>
                  <Input type='password' {...field} id="pass" placeholder="Password" />
                  <ErrorMessage name="pass" component="div" />
                </FormControl>
              )}
            </Field>
            <Button width={400}
              mt={4}
              mb={2}
              colorScheme='teal'
              isDisabled={isLoading}
              type='submit'
            >
              Login
            </Button>
            
  Don't have an account? <Link to='/signup'>Sign Up</Link>

        </Form>
   
   ) } 
            </Formik>
            {error&&<Text>{error}</Text>}
            </Box>
  </HStack>

  )
}

export default Login