import { Field, Form, Formik } from "formik";
import {useDispatch} from "react-redux"
import { logIN } from "../../redux/auth/operations";
export default function LoginForm() {
   const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(logIN(values))
        action.resetForm();
    }
    return (
        <Formik initialValues={{
                
                email: "",
                password:"",
            }} onSubmit={handleSubmit}>
            <Form>
                <label >
                    Email
                    <Field type ="email" name="email"/>
                </label>
                <label >
                    Password
                    <Field type ="password" name="password"/>
                </label>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}