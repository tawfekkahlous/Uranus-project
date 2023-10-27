import "./signup.css";
import { Button, TextField } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import welcomeLogo from "../../../assets/welcome-Logo.png";
import * as Yup from "yup";
// import  { useState } from "react";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("login");
  };

  //  const [showPassword, setShowPassword] =useState(false);
  //    const handleClickShowPassword = () => setShowPassword((show) => !show);
  //     const handleMouseDownPassword = (event) => {
  //       event.preventDefault();
  //     };
  return (
    <div className="signup-page flex justify-center items-center gap-x-[32px]">
      <div className="uranus py-[40px] hidden  lg:flex flex-col justify-between md:w-[400px] md:h-[409px] ">
        <div className="">
          <img src={welcomeLogo} alt="welcome-logo" className="logo " />
        </div>
        <div className=" text-center mt-[80px]">
          <Link to="/login">
            <button onClick={handleClick} className="login">
              Login
            </button>
          </Link>
        </div>
      </div>

      <div className="form  w-[330px] md:w-[400px] py-[60px]  h-[409px] flex flex-col ">
        <h2> Singup</h2>
        <div className=" text-center grow ">
          <Formik
            // validationSchema={validationSchema}
            initialValues={{
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }, setSubmitting) => {
              console.log({ values });
              resetForm();
              setSubmitting(false);
            }}
          >
            {(formik) => (
              <Form className="h-[100%] flex flex-col justify-between">
                <div className="">
                  <div className=" w-[100%] ">
                    <Field
                      as={TextField}
                      name="email"
                      id="email"
                      label="Email or phone "
                      variant="outlined"
                      error={formik.errors.email && formik.touched.email}
                      InputLabelProps={{
                        style: {
                          color: "#353B42",
                          fontSize: "15px",
                          fontWeight: "700",
                          opacity: "0.75",
                        },
                      }}
                      sx={{
                        borderRadius: "8px",
                        width: "80%",
                        marginTop: "25px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&:hover fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&.Mui-focused fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage name="email">
                      {(msg) => (
                        <p className=" text-[14px] text-[red]">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="w-[100%]">
                    <Field
                      as={TextField}
                      name="password"
                      id="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      error={formik.errors.password && formik.touched.password}
                      InputLabelProps={{
                        style: {
                          color: "#353B42",
                          fontSize: "15px",
                          fontWeight: "700",
                          opacity: "0.75",
                        },
                      }}
                      sx={{
                        borderRadius: "8px",
                        height: "100%",
                        marginTop: "15px",
                        width: "80%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&:hover fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&.Mui-focused fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage name="password">
                      {(msg) => (
                        <p className=" text-[14px] text-[red]">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="w-[100$] ">
                    <Field
                      as={TextField}
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      label="Re-type Password"
                      variant="outlined"
                      error={
                        formik.errors.confirmPassword &&
                        formik.touched.confirmPassword
                      }
                      InputLabelProps={{
                        style: {
                          color: "#353B42",
                          fontSize: "15px",
                          fontWeight: "700",
                          opacity: "0.75",
                        },
                      }}
                      sx={{
                        borderRadius: "8px",
                        height: "100%",
                        marginTop: "15px",
                        width: "80%",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&:hover fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                          "&.Mui-focused fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "12px",
                          },
                        },
                      }}
                    />
                    <ErrorMessage name="confirmPassword">
                      {(msg) => (
                        <p className=" text-[14px] text-[red]">{msg}</p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <Link to="name">
                  <Button
                    variant="contained"
                    type="submit"
                    color="error"
                    sx={{
                      borderRadius: "12px",
                      width: "250px",
                      boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                      background: "var(--P1, #E42E35)",
                      color: "#F5FAFF",
                      fontSize: "15px",
                      fonrWeight: "700",
                      fontFamily: "Quicksand",
                      padding: "10px",
                      // marginTop: "83px",
                      lineHeight: "normal",
                    }}
                    disabled={!formik.isValid || !formik.dirty}
                  >
                    Signup
                  </Button>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
