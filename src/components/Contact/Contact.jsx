import { FaPhone } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import css from '../Contact/Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps.js";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function Contact({ data }) {
    
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(data.id))
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

    return (
        <div className={css.container} >
            <div>
            <div className={css.item}>
                <IoManSharp />
                <p className={css.data}>{data.name}</p>
            </div>
            <div className={css.item}>
                <FaPhone />
                <p className={css.data}>{data.number}</p>
            </div>
            </div>
            <ThemeProvider theme={theme}>
                    <Button variant="contained"  color="ochre" className={css.btn} type="button" onClick={handleDelete} >Delete</Button>
                    </ThemeProvider>
            
        </div>
    )
        
        

}