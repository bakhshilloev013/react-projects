import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
    return (
        <>
            <Button onClick={resetTodos} title="Reset Todos">
                <RiRefreshLine />
            </Button>
            <Button
                onClick={deleteCompletedTodos}
                title="Reset completed todos"
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </>
    );
}

export default TodosActions;
