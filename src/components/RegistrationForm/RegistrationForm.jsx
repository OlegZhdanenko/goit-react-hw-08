import { Field, Form, Formik } from "formik";
import {useDispatch} from "react-redux"
import { register } from "../../redux/auth/operations";
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from "yup";
import css from "../RegistrationForm/RegistrationForm.module.css"

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, action) => {
        dispatch(register(values)).unwrap().then(()=>toast.success("Registration succees!")).catch(()=>toast.error("Registration error,please try again!"))
        action.resetForm();
    }
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#FF5733',
                light: '#E9DB5D',
                dark: '#A29415',
                contrastText: '#242105',
            },
        },
    });
     const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(8, "Too Short!").max(50, "Too Long!").required("Required"),
});
    return (
        <Formik initialValues={{
                name: "",
                email: "",
                password:"",
            }} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <label className={css.label} >
                    Username
                    <Field type ="text" name="name"/>
                </label>
                <label className={css.label}>
                    Email
                    <Field type ="email" name="email"/>
                </label>
                <label className={css.label}>
                    Password
                    <Field type ="password" name="password"/>
                </label>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="ochre" type="submit">Register</Button>
                    </ThemeProvider>
            </Form>
        </Formik>
    )
}