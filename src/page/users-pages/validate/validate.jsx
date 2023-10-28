import "./validate.css";
import welcomeLogo from "../../../assets/welcome-Logo.png";
import validateFace from "../../../assets/validate-face.svg";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, MenuItem, TextField } from "@mui/material";
import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";

const validationSchema = Yup.object().shape({
  resident: Yup.string().required("Required"),
});

const currencies = [
  {
    value: "chevrolet",
    label: "chevrolet",
  },
  {
    value: "kia",
    label: "kia",
  },
  {
    value: "honda",
    label: "honda",
  },
  {
    value: "bmw",
    label: "bmw",
  },
];

const Validate = () => {
  return (
    <div className="validatePage flex items-center flex-col md:flex-row  justify-center gap-x-[32px] p-[30px] gap-[30px]">
      <div className="leftBox  py-[40px] w-[310px] md:w-[400px] ">
        <img src={welcomeLogo} alt="welcome-logo" className="welcome" />
        <div className="mt-[50px]">
          <img
            src={validateFace}
            alt="validate-face"
            className="w-[100px] h-[100px] m-[auto]"
          />
          <p>we need more info about you to validate your Identity</p>
        </div>
      </div>

      <div className="rightBox py-[40px] w-[310px] md:w-[400px]">
        <h3>One more step...</h3>
        <div>
          <p>please choose what type of residency you have</p>
        </div>

        <div className="  mt-[31px] ">
          <Formik
            initialValues={{ resident: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              console.log({ values });
            }}
          >
            {({ values }) => (
              <Form>
                <div className=" flex justify-center">
                  <Field
                    as={TextField}
                    select
                    name="resident"
                    id="outlined-select-resident"
                    label="Resident"
                    variant="outlined"
                    sx={{
                      background: "var(--N2, #F5FAFF)",
                      backdropFilter: "blur(2px)",
                      boxShadow: "0px 4px 33px 0px rgba(0, 0, 0, 0.25)",
                      borderRadius: "12px",
                      width: "150px",
                      height: "100%",
                      // margin: "10px 0px",
                      margin: "auto",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "2px solid #E42E35",
                          borderRadius: "6px",
                        },
                        "&:hover fieldset": {
                          border: "2px solid #E42E35",
                          borderRadius: "6px",
                        },
                        "&.Mui-focused fieldset": {
                          border: "2px solid #E42E35",
                          borderRadius: "6px",
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "#353B42",
                        fontSize: "15px",
                        fontWeight: "700",
                      },
                    }}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field>
                  {/* <ErrorMessage name="resident">
                    {(msg) => <p className=" text-[14px]">{msg}</p>}
                  </ErrorMessage> */}
                </div>
                <Link to="validatePictures">
                  <div className="text-center mt-[15px]">
                    <Button
                      variant="contained"
                      type="submit"
                      color="error"
                      disabled={values.resident ? false : true}
                      sx={{
                        borderRadius: "12px",
                        marginTop: "50px",
                        width: "250px",
                        boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.25)",
                        background: "var(--P1, #E42E35)",
                        color: "#F5FAFF",
                        fontSize: "15px",
                        fonrWeight: "700",
                        fontFamily: "Quicksand",
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </Link>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Validate;
