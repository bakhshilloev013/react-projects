import styles from './Todo.module.css';
import { RiTodoFill } from "react-icons/ri";

function Todo({ todo, deleteTodo, index }) {
    return (
        <div onDoubleClick={() => {deleteTodo(index)}} className={styles.todo}>
            <div className={styles.todoText}>
                <RiTodoFill className={styles.todoIcon} />    
                {todo}
            </div>
        </div>
    )
}

export default Todo;