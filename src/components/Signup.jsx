import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    Image,
    HStack,
    Box,
    Center,
    Button
} from '@chakra-ui/react'
import {useSignup} from '../hooks/useSignup'
 import * as Yup from 'yup';
 import { Field, Form, Formik,ErrorMessage } from 'formik';
function Signup() {
  const {signup,error,isLoading} =useSignup()
    const  initialValues={
        email:'',
        pass:'',
        }
        const onSubmit=async(val,{resetForm})=>{
           await signup(val.email,val.pass)
         }
         const validationSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            pass: Yup.string().required('password must contain minimum characters'),
          });
          return (

            <HStack spacing='24px'>
      <Box mb='300'
         mt='250'
         ml='200'>
        <Center>
         <Image width={'40vw'}
         
        src='signup1.png' alt='Dan Abramov' />
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
                  colorScheme='teal'
                  isDisabled={isLoading}
                  type='submit'
                >
                  Sign up
                </Button>
            </Form>
       
       ) } 
                </Formik>
                {error&&<div>{error}</div>}
                </Box>
      </HStack>
    
      )
    }
    
    export default Signup