import Todo from "./Todo";
import styles from "./TodoList.module.css";

function TodoList(props) {
    const { todos, deleteTodo, toggleTodo } = props;

    return (
        <div className={styles.todoListContainer}>
            {todos.length ? (
                todos.map((item) => (
                    <Todo
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        todo={item}
                        key={item.id}
                    />
                ))
            ) : (
                <h2>Todo list is empty</h2>
            )}
        </div>
    );
}

export default TodoList;
