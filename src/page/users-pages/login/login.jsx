import { Button, TextField } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import welcomeLogo from "../../../assets/welcome-Logo.png";
import "./login.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const LoginUser = () => {
  return (
    <div className="login-page flex justify-center items-center gap-[32px] p-[30px] flex-col md:flex-row">
      <div className="uranus py-[60px]  hidden  lg:flex flex-col justify-between md:w-[400px] md:h-[409px] ">
        <div className="">
          <img src={welcomeLogo} alt="welcome-logo" className="logo " />
        </div>
        <div className=" form-login text-center mt-[80px]">
          <Link to="/signup">
            <button className="signup  mt-[15px]">Signup</button>
          </Link>
        </div>
      </div>

      <div className="form w-[330px] md:w-[400px] py-[60px]  h-[409px] flex flex-col ">
        <h2> Login</h2>
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
                        width: "90%",
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
                        width: "90%",
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

                <Link to="/home">
                  <Button
                    variant="contained"
                    type="submit"
                    color="error"
                    sx={{
                      borderRadius: "12px",
                      width: "60%",
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

export default LoginUser;
