import { useState } from "react";
import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };
    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter new todo"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
