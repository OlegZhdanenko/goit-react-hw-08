import {useSelector} from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    return (
        <div>
            <p>Welcome,{user.name}</p>
            <button type="submit" onClick={()=>dispatch(logOut())}>Logout</button>
        </div>
    )
}