import React from 'react'
 import { Field, Form, Formik,ErrorMessage } from 'formik';
 import {
    FormControl,
    FormLabel,
    
    Box,
    Input,
    Button,
    Center,
    Heading
  } from '@chakra-ui/react'
  import * as Yup from 'yup';
function Formk() {
  const  initialValues={
    fname:'',
    lname:'',
    email:'',
    branch:'',
    phonenum:'',
    fathname:'',
    mothname:'',


  }
  const onSubmit=async(val,{resetForm})=>{
    try{
       const  res=await fetch('/api/data',{
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
  fname: Yup.string().required('First Name is required'),
  lname: Yup.string().required('Last Name is required'),
  fathname: Yup.string().required('Father Name is required'),
  mothname: Yup.string().required('Mother Name is required'),
 
  branch: Yup.string().required('Branch is required'),
  phonenum: Yup.string().required('Mobile Number is required'),
  
  email: Yup.string().email('Invalid email').required('Email is required'),
});

    return (
        <Center>
        <Box width={500}>
        <Heading width={1000}
            mb='5'
            mt='5'>STUDENT REGISTRATION </Heading>
        <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
    
        {({errors,touched, form})=>(
          <Form>
            <Field name="fname">
              {({ field }) => (
                 <FormControl isInvalid={errors.dob && touched.dob}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input type='name' {...field} id="fname" placeholder="First Name" />
                  <ErrorMessage name="fname" component="div" />
                </FormControl>
              )}
            </Field>
            <Field name="lname">
              {({ field }) => (
                 <FormControl isInvalid={errors.dob && touched.dob}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input type='name' {...field} id="lname" placeholder="Last Name" />
                  <ErrorMessage name="lname" component="div" color='red'/>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field }) => (
                 <FormControl isInvalid={errors.dob && touched.dob}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input type='email' {...field} id="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                </FormControl>
              )}
            </Field>
          
      <Field name="fathname">
            {({ field, form }) => (
              <FormControl isInvalid={errors.dob && touched.dob}>
                <FormLabel htmlFor="firstName">Father name</FormLabel>
                <Input type='name' {...field} id="fathname" placeholder="Father Name" />
                <ErrorMessage name="fathname" component="div" />
              </FormControl>
            )}
          </Field>
      <Field name="mothname">
            {({ field, form }) => (
              <FormControl isInvalid={errors.mobN && touched.mobN}>
                <FormLabel htmlFor="firstName">Mother Name</FormLabel>
                <Input type='name' {...field} id="mothname" placeholder="Mother Name" />
                <ErrorMessage name="mothname" component="div" />
              </FormControl>
            )}
          </Field>
      <Field name="phonenum">
            {({ field, form }) => (
              <FormControl isInvalid={errors.prof && touched.prof}>
                <FormLabel htmlFor="firstName">Mobile Number</FormLabel>
                <Input type='number' {...field} id="phonenum" placeholder="Mobile Number" />
                <ErrorMessage name="phonenum" component="div" />
              </FormControl>
            )}
          </Field>
          <Field name="branch">
            {({ field, form }) => (
              <FormControl isInvalid={errors.mobN && touched.mobN}>
                <FormLabel htmlFor="firstName">Branch</FormLabel>
                <Input type='text' {...field} id="branch" placeholder="Branch" />
                <ErrorMessage name="branch" component="div" />
              </FormControl>
            )}
          </Field>
          <Button width={500}
              mt={4}
              colorScheme='teal'
              
              type='submit'
            >
              Submit
            </Button>
      </Form>
            )}
    </Formik>
      </Box>
      </Center>
    )
  }
  export default Formk