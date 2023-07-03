import {useState } from 'react'
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button , Box} from '@mui/material';
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom';
import { BiHide, BiShow } from 'react-icons/bi'
import { set } from 'date-fns';
const SignUp = () => {

  const { newUser } = UserAuth();
  const navigate = useNavigate();
  const [showPW, setShowPW] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);
  const [click, setClick] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
   

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Confirm Password is required')
  });

  const handleSubmit = async (values) => {

    try {
      setLoading(true)
      await newUser(values.email, values.password);
      console.log('User created successfully');
      setLoading(false);
      navigate('/DashBoard');
    } catch (error) {
      console.error(error);
      setError('Failed to create an account');
    }
  }
  
  
  const formik = useFormik({
    initialValues: { email: '', password: '', confirmPassword: ''}, 
    validationSchema, 
    onSubmit: handleSubmit
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
        <span className="showIcon" onClick={() =>setShowConfirmPW(!showConfirmPW)}>
        {
            showConfirmPW ? (
              <BiShow className="icon" />
            ):(
              <BiHide className="icon" />
            )
          }
        </span>
        <TextField id="standard-basic-confirmPassword" label="confirmPassword"
          type={showConfirmPW ? "text" : "password"}
          name="confirmPassword"
          variant="outlined"
          value={formik.values.confirmPassword}
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
            <span >Already has an account 
              <Link to="/login" className="link"> Login </Link>
            </span>
          </div>
        </form>
      </Box>
    </>
  )
}

export default SignUp
