import { FaPhone } from "react-icons/fa6";
import { IoManSharp } from "react-icons/io5";
import css from '../Contact/Contact.module.css'
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
export default function Contact({ data }) {
    
    const dispatch = useDispatch()
    const handleDelete = () => dispatch(deleteContact(data.id))

    return (
        <div className={css.container} >
            <div>
            <div className={css.item}>
                <IoManSharp />
                <p className={css.data}>{data.name}</p>
            </div>
            <div className={css.item}>
                <FaPhone />
                <p className={css.data}>{data.phone}</p>
            </div>
            </div>
            <button className={css.btn} type="button" onClick={handleDelete}> Delete</button>
        </div>
    )
        
        

}