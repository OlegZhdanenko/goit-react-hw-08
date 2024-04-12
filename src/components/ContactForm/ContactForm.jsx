import { Formik ,Form , Field ,ErrorMessage } from "formik"
import { useId } from "react";
import * as Yup from "yup";
import "yup-phone";
import css from "../ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact, fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  
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


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  
});
    const initialValues = {
      name: "",
      number: ""
      
};


    
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
    actions.resetForm();
  }
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.list}> 
                <label htmlFor={nameFieldId} className={css.label}>Name</label>
          <Field type="text" name="name" id={nameFieldId}  className={css.input}/>
          <ErrorMessage name="name" component="span" className={css.messege}/>
                <label htmlFor={phoneFieldId} className={css.label}>Number</label>
          <Field type="tell" name="number"  className={css.input}/>
          <ErrorMessage name="number" component="span" className={css.messege}/>
          
          <ThemeProvider theme={theme}>
                    <Button variant="contained" className={css.btn} color="ochre" type="submit" >Add contact</Button>
                    </ThemeProvider>
            </Form>
        </Formik>
    )
}