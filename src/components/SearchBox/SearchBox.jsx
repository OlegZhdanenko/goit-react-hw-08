import { useDispatch, useSelector} from "react-redux"
import css from "../SearchBox/SearchBox.module.css"
import { changeFilter }  from "../../redux/filtersSlice"
import {selectNameFilter} from "../../redux/filtersSlice"
import { useId } from "react"
export default function SearchBox() {
    const elementId = useId()
    const nameFilter = useSelector(selectNameFilter);
    const dispatch = useDispatch()
    
    const handleChange=(e)=>dispatch(changeFilter(e.target.value))

    return (
        <div className={css.search}>
            <label className={css.label} htmlFor={elementId}>
                Find contacts by name
            </label>
            <input className={css.input}
                type="text"
                value={nameFilter}
                onChange={handleChange}
                id={elementId}
                placeholder="Search"
            />
        </div>
    );
}

