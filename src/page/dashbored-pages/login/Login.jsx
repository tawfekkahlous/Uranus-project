
import "./login.css"
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const LoginAdmin = () => {
 const validationSchema = Yup.object().shape({
   email: Yup.string()
     .email("Invalid email address")
     .required("Email is required"),
   password: Yup.string()
     .min(8, "Password must be at least 8 characters")
     .required("Password is required"),
 });


  return (
    <div className="w-100% h-[100vh] flex items-center justify-center">
      {/* <div className=" admin w-[450px] flex flex-col justify-center items-center pt-[50px] pb-[35px] ">
        <h2 className="mb-[60px]">Admin Login</h2>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <div className="w-[350px] text-center">
                <div>
                  <Field
                    as={TextField}
                    name="email"
                    id="email"
                    label="Email"
                    variant="outlined"
                    error={errors.email && touched.email}
                    sx={{
                      borderRadius: "10px",
                      width: "100%",
                      margin: "10px 0px",
                      height: "50px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "2px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "10px",
                        },
                        "&:hover fieldset": {
                          border: "2px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "10px",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "10px",
                        },
                      },
                    }}
                  />
                </div>
                <ErrorMessage name="email">
                  {(msg) => <p className=" text-[14px] text-[red]">{msg}</p>}
                </ErrorMessage>
                <div>
                  <div className="relative w-[]">
                    <Field
                      as={TextField}
                      name="password"
                      id="password"
                      label="Password"
                      variant="outlined"
                      // type={isPassword ? "text" : "password"}
                      type="password"
                      error={errors.password && touched.password}
                      sx={{
                        borderRadius: "10px",
                        width: "100%",
                        margin: "10px 0px",
                        height: "50px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "10px",
                          },
                          "&:hover fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "10px",
                          },
                          "&.Mui-focused fieldset": {
                            border: "2px solid rgba(62, 63, 67, 0.60)",
                            borderRadius: "10px",
                          },
                        },
                      }}
                    />
                  </div>
                  <ErrorMessage name="password">
                    {(msg) => <p className=" text-[14px] text-[red]">{msg}</p>}
                  </ErrorMessage>
                </div>
                <Link to="dashboard/users">
                  <Button
                    variant="contained"
                    type="submit"
                    color="error"
                    sx={{
                      padding: "8px",
                      borderRadius: "10px",
                      width: "80%",
                      marginTop: "40px",
                    }}
                    disabled={!(isValid && dirty)}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div> */}
      <div className="form w-[450px] py-[60px]  h-[409px] flex flex-col admin ">
        <h2> Admin Login</h2>
        <div className=" text-center grow">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log({ values });
              resetForm();
            }}
          >
            {({ errors, touched, dirty, isValid }) => (
              <Form className="flex flex-col justify-between h-[100%] ">
                <div>
                  <div className=" w-[100%] ">
                    <Field
                      as={TextField}
                      name="email"
                      id="email"
                      label="Email or phone "
                      variant="outlined"
                      error={errors.email && touched.email}
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
                        marginTop: "50px",
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
                      error={errors.password && touched.password}
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
                        marginTop: "20px",
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
                </div>

                <Link to="dashboard/users">
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
                      lineHeight: "normal",
                    }}
                    disabled={!isValid || !dirty}
                  >
                    Login
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

export default LoginAdmin;
