import { Field, Form, Formik } from "formik";
import {useDispatch} from "react-redux"
import { logIN } from "../../redux/auth/operations";
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from "yup";
import css from "../LoginForm/LoginForm.module.css"
export default function LoginForm() {
   const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(logIN(values)).unwrap().then(()=>toast.success("Login succees!")).catch(()=>toast.error("Login error ,please try again"))
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
  email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});
    return (
        <Formik initialValues={{
                email: "",
                password:"",
        }} onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
            <Form className={css.form}>
                <label className={css.label}>
                    Email
                    <Field type ="email" name="email"/>
                </label>
                <label className={css.label}>
                    Password
                    <Field type ="password" name="password"/>
                </label>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="ochre" type="submit">Log in</Button>
                    </ThemeProvider>
            </Form>
        </Formik>
    )
}