import React from "react";
import { Field, Form, Formik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Box,
  Input,
  Button,
  Center,
  Heading,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import * as Yup from "yup";
import { useWebContext } from '../hooks/useWebContext'
import Success from "./Success";
import { useAuthContext } from '../hooks/useAuthContext'
function Formk() {
  const {user}=useAuthContext()
  const {dispatch}=useWebContext()
  const [suc,setSuc]=React.useState(true)
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    branch: "",
    phonenum: "",
    fathname: "",
    mothname: "",
  };
  const onSubmit = async (val, { resetForm }) => {
    try {
      if(!user)
      {
        return
      }
      const res = await fetch("/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
            'Authorization':`Bearer ${user.token}`
          
        },
        body: JSON.stringify(val),
      });
      if (!res.ok) {
        console.log("err");
      }
      if (res.ok) {
       dispatch({type:'CREATE_DATA',payload:val})
        resetForm();
        setSuc(false)
      }
    
    } catch (err) {
      console.log(err);
    }
  };

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    fathname: Yup.string().required("Father Name is required"),
    mothname: Yup.string().required("Mother Name is required"),

    branch: Yup.string().required("Branch is required"),
    phonenum: Yup.string().required("Mobile Number is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <>
    <Link to='/'> <IconButton position={'absolute'} ml='20' mt='5'
    icon={<ArrowLeftIcon/>}
    ></IconButton></Link>
    <Center>
     {!suc ?<Success/>: <Box width={500}>
        <Heading width={500} mb="5" mt="5" ml='10'>
          STUDENT REGISTRATION
        </Heading>
        {/* <Heading width={500} mb="5" mt="5">
          Student REGISTRATION
        </Heading> */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched, form }) => (
            <Form>
              <Field name="fname">
                {({ field }) => (
                  <FormControl isInvalid={errors.fname && touched.fname}>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      type="name"
                      {...field}
                      id="fname"
                      placeholder="First Name"
                    />
                    {/* <ErrorMessage name="fname" component="div" /> */}
                    <FormErrorMessage>{errors.fname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="lname">
                {({ field }) => (
                  <FormControl isInvalid={errors.lname && touched.lname}>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <Input
                      type="name"
                      {...field}
                      id="lname"
                      placeholder="Last Name"
                    />
                    <FormErrorMessage>{errors.lname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field }) => (
                  <FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      type="email"
                      {...field}
                      id="email"
                      placeholder="Email"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="fathname">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.fathname && touched.fathname}>
                    <FormLabel htmlFor="firstName">Father name</FormLabel>
                    <Input
                      type="name"
                      {...field}
                      id="fathname"
                      placeholder="Father Name"
                    />
                    <FormErrorMessage>{errors.fathname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="mothname">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.mothname && touched.mothname}>
                    <FormLabel htmlFor="firstName">Mother Name</FormLabel>
                    <Input
                      type="name"
                      {...field}
                      id="mothname"
                      placeholder="Mother Name"
                    />
                <FormErrorMessage>{errors.mothname}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="phonenum">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.phonenum && touched.phonenum}>
                    <FormLabel htmlFor="firstName">Mobile Number</FormLabel>
                    <Input
                      type="number"
                      {...field}
                      id="phonenum"
                      placeholder="Mobile Number"
                    />
                    <FormErrorMessage>{errors.phonenum}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="branch">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.branch && touched.branch}>
                    <FormLabel htmlFor="firstName">Branch</FormLabel>
                    <Select
                      size="md"
                      name="branch"
                      {...field}
                      id="branch"
                      placeholder="Select Branch"
                    >
                      <option value="cse">CSE</option>
                      <option value="ece">ECE</option>
                      <option value="ce">CE</option>
                      <option value="it">IT</option>
                      <option value="mech">MECH</option>
                    </Select>
                    <FormErrorMessage>{errors.branch}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button width={500} mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>}
    </Center>
    </>
  );
}
export default Formk;
