import { FaEdit, FaWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";

import './Tarefas.css'

export default function tarefas({tarefas, handleDelete, handleEdit}) {
    return (
         <ul className="tarefas">
            {tarefas.map((tarefa, index) => {
                return <li key={tarefa}>
                    { tarefa }
                    <span>
                        <FaEdit  
                            className="edit"
                            onClick={(e) => handleEdit(e, index)}
                        />

                        <FaWindowClose 
                            className="delete"
                            onClick={(e) => handleDelete(e, index)}
                        />
                    </span>
                </li>
            })}
        </ul>
    );
}

tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
};