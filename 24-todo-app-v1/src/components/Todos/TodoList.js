import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList(props) {
    const { todos, deleteTodo } = props;

    return (
        <div className={styles.todoListContainer}>
            {
                (todos.length) ? 
                todos.map((item, i) => <Todo deleteTodo={deleteTodo} index={i} todo={item} key={i} />) :
                <h2>Todo list is empty</h2>
            }
        </div>
    );
}

export default TodoList;
