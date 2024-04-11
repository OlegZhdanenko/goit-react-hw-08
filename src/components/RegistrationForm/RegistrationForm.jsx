import { Field, Form, Formik } from "formik";
import {useDispatch} from "react-redux"
import { register } from "../../redux/auth/operations";
export default function RegistrationForm() {
   const dispatch = useDispatch()

    const handleSubmit = (values, action) => {
        dispatch(register(values))
        action.resetForm();
    }
    return (
        <Formik initialValues={{
                name: "",
                email: "",
                password:"",
            }} onSubmit={handleSubmit}>
            <Form>
                <label >
                    Username
                    <Field type ="text" name="name"/>
                </label>
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