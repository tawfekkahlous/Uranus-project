
import "./login.css"
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

const LoginAdmin = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="w-100% h-[100vh] flex items-center justify-center">
      <div className=" admin w-[450px] flex flex-col justify-center items-center pt-[50px] pb-[35px] ">
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
                    // sx={{
                    //   borderRadius: "10px",
                    //   width: "100%",
                    //   margin: "10px 0px",
                    //   height: "50px",
                    // }}
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
      </div>
    </div>
  );
};

export default LoginAdmin;
