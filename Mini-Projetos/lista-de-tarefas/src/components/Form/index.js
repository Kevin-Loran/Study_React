import propTypes from 'prop-types'
import { FaPlus } from "react-icons/fa";
import './Form.css'


export default function Form({ handleChange, handleSubmit, novatarefa }) {
    return (
        <form onSubmit={handleSubmit} action="#" className="form">
            <input onChange={handleChange} 
            type="text" 
            value={novatarefa}
            />
            
            <button type='submit'>
                <FaPlus />
            </button>
        </form>
    );
}


Form.propTypes = {
    handleChange: propTypes.func.isRequired,
    handleSubmit: propTypes.func.isRequired,
    novatarefa: propTypes.string.isRequired,
};