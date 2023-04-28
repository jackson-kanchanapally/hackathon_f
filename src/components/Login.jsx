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
  import * as Yup from 'yup';
  import { Field, Form, Formik,ErrorMessage } from 'formik';
  import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
 
function Login() {
    const  initialValues={
        uname:'',
        pass:'',
        }
        const onSubmit=async(val,{resetForm})=>{
            try{
               const  res=await fetch('/api/data/login',{
                 method:'POST',
                 headers:{
                   'Content-Type':'application/json',
                 },
                 body:JSON.stringify(val),
               })
               if(!res.ok)
               {
                console.log('err') 
               }
               if(res.ok)
               {
                console.log(res)
               resetForm() 
               }
               
            }catch(err){
             console.log(err)
            }
        }
        const validationSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email is required'),
            pass: Yup.string().required('password must contain minimum characters'),
          });
  return (

        <HStack spacing='24px'>
  <Box mb='300'
     mt='250'
     ml='100'
     mr='100'>
    <Center>
     <Image width={'40vw'}
     
    src='login1.png' alt='Dan Abramov' />
    </Center>
    </Box>

    <Box  width={400}   mb='300' mr>
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
              mt={4} mb={10}
              colorScheme='teal'
              
              type='submit'
            >
              Login
            </Button>
        </Form>
   
   ) } 
            </Formik>
            <Link href='/signup' isExternal >
            Don't have an account?

  Signup <ExternalLinkIcon mx='2px' />
</Link>
            </Box>
  </HStack>

  )
}

export default Login