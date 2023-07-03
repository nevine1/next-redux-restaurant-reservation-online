import { useState } from 'react'
import * as Yup from 'yup'
import {useFormik } from 'formik';
import {Link, useNavigate } from 'react-router-dom';
import { Box, TextField, Button } from '@mui/material'
import { BiHide, BiShow} from 'react-icons/bi'
import { UserAuth } from '../context/AuthContext';
const Login = () => {
  const { signIn } = UserAuth();
  const [showPW, setShowPW] = useState(false);
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('')
  const navigate  = useNavigate();
  const handleSubmit = async(values) =>{
    try {
      setLoading(true)
      await signIn(values.email, values.password);
      console.log('User created successfully');
      setLoading(false);
      navigate(-1);
    } catch (error) {
      console.error(error);
      setError('Failed to create an account');
    }
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email').required('Email is required'), 
    password: Yup.string().min(6, 'min characters must be more than 6').required('password is required')
  })
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema, 
    onSubmit: handleSubmit,
  })
  return (
    <>
     <Box className="regForm">
        <form  onSubmit={formik.handleSubmit}>
          <h3 className="text-center">Sign Up</h3>
        <TextField type="text" id="standard-basic-email" label="Email"
          name="email"
         variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          size="small"
          autoComplete='off'
          className="formField"
          fullWidth
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          
        />
        <span className="showIcon" onClick={() =>setShowPW(!showPW)}>
          {
            showPW ? (
              <BiShow className="icon" />
            ):(
              <BiHide className="icon" />
            )
          }
         
          </span>
        <TextField type={showPW ? "text" : "password"} 
          id="standard-basic-password"
          name="password"
         label="Password" variant="outlined" 
          value={formik.values.password}
          onChange={formik.handleChange}
          autoComplete='off'
          className="formField"
          fullWidth size="small"
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}

        />
        
        
         
          <Button variant="contained" fullWidth size="small"
            type="submit"
          >Submit</Button>
          <div className="haveAccount ">
            <span >Create a new Account 
              <Link to="/register" className="link"> Sign Up </Link>
            </span>
          </div>
        </form>
      </Box>
    </>
  )
}

export default Login
