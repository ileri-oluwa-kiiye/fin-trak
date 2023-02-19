import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom"

const Stepone = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    

    
  };

  return (
    <div className="controlwidth">
        <h1 style={{textAlign:"center", fontSize:"30px"}}>Fin-traka</h1>
        <p style={{textAlign:"center", fontSize:"16px"}}>Open your account</p>
        <Box m="20px" maxWidth="500px" width="80vw" margin="30px auto">

<Formik
  onSubmit={handleFormSubmit}
  initialValues={initialValues}
  validationSchema={checkoutSchema}
>
  {({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  }) => (
    <form onSubmit={handleSubmit}>
      <Box
        display="grid"
        gap="13px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        <TextField
          fullWidth
          variant="filled"
          type="text"
          background-color="white"
          outline = "none"
          label="First Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
          name="firstName"
          error={!!touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          fullWidth
          variant="filled"
          type="text"
          label="Last Name"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.lastName}
          name="lastName"
          error={!!touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
          sx={{ gridColumn: "span 4" }}
        /> 

      <TextField
      fullWidth
      variant="filled"
      type="text"
      label= "Business Name(optional)"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.business}
      name = "business"
      error = {!!touched.business && !!errors.business}
      helperText = {touched.business && errors.business}
      sx = {{ gridColumn : "span 4 "}}
      />
      <TextField
      fullWidth
      variant="filled"
      type="text"
      label= "E-mail address"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.email}
      name = "email"
      helperText = {touched.email && errors.email}
      sx = {{ gridColumn : "span 4 "}}
      />
      <TextField
      fullWidth
      variant="filled"
      type="text"
      label= "Phone number"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.phoneNumber}
      name = "phoneNumber"
      error = {!!touched.phoneNumber && !!errors.phoneNumber}
      helperText = {touched.phoneNumber && errors.phoneNumber}
      sx = {{ gridColumn : "span 4 "}}
      />
      <TextField
      fullWidth
      variant="filled"
      type="text"
      label= "Location"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.location}
      name = "location"
      error = {!!touched.location && !!errors.location}
      helperText = {touched.location && errors.location}
      sx = {{ gridColumn : "span 4 "}}
      />
      <TextField
      fullWidth
      variant="filled"
      type="password"
      label= "Password"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.password}
      name = "password"
      error = {!!touched.password && !!errors.password}
      helperText = {touched.password && errors.password}
      sx = {{ gridColumn : "span 4 "}}
      />
      <TextField
      fullWidth
      variant="filled"
      type="password"
      label= "Confirm Password"
      onBlur={handleBlur}
      onChange = {handleChange}
      value= {values.confirmPassword}
      name = "confirmPassword"
      error = {!!touched.confirmPassword && !!errors.confirmPassword}
      helperText = {touched.confirmPassword && errors.confirmPassword}
      sx = {{ gridColumn : "span 4 "}}
      />
      </Box>
      <Box display="flex" justifyContent="end" mt="20px">
        <Button type="submit"  style={{backgroundColor:"#D9D9D9", color:"black", fontSize: "14px", fontWeight:"600"}}>
        <Link to="/dashboard" style={{color:'inherit', textDecoration: 'none'}}>Sign Up</Link>
        </Button>
      </Box>
    </form>
  )}
</Formik>
</Box>
    </div>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
//   business: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    location: yup.string().required("required"),
    password: yup.string().required("required"),
  confirmPassword: yup.string().required("required"),
});


const initialValues = {
  firstName: "",
  lastName: "",
  business: "",
  email: "",
  phoneNumber: "",
  location: "",
  password: "",
  confirmPassword: "",
};

export default Stepone;

