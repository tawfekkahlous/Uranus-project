import "./name.css";
import { Formik, Field, Form } from "formik";
import { Button, TextField } from "@mui/material";
import * as yup from "yup";
import nameIcon from "../../../assets/name-icon.svg";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
});
const Name = () => {
  return (
    <div className="name-page flex items-center justify-center">
      <div className=" box text-center w-[500px] py-[40px] ">
        <div className=" flex justify-center items-center gap-[6px]">
          <img
            src={nameIcon}
            alt="name-icon"
            className="w-[18px]  opacity-75"
          />
          <p className="">Your account was successfully created</p>
        </div>

        <div className=" mt-[40px]">
          <p className="label">What’s your name?</p>
          <div className="mt-[40px]">
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ errors, touched,dirty,isValid }) => (
                <Form>
                  <Field
                    name="name"
                    as={TextField}
                    variant="outlined"
                    helperText={touched.name ? errors.name : ""}
                    error={touched.name && Boolean(errors.name)}
                    className="w-[566px] h-[58px] mt-[48px]"
                    sx={{
                      width: "400px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                        "&:hover fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                        "&.Mui-focused fieldset": {
                          border: "3px solid rgba(62, 63, 67, 0.60)",
                          borderRadius: "12px",
                        },
                      },
                    }}
                  />
                  <Link to="validate">
                    <div className=" mt-[150px] ">
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
                          lineHeight:"normal"
                        }}
                        disabled={!isValid || !dirty}
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
    </div>
  );
};

export default Name;
