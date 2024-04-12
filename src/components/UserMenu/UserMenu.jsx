import {useSelector} from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import css from "../UserMenu/UserMenu.module.css"
import toast from 'react-hot-toast';

export default function UserMenu() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
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
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name}</p>
            <ThemeProvider theme={theme}>
                    <Button variant="contained" color="ochre" type="submit" onClick={()=>dispatch(logOut()).unwrap().then(()=>toast.success("Logout succees!"))}>Logout</Button>
                    </ThemeProvider>
        </div>
    )
}