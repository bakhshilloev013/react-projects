import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function ChangeUser() {
    const { user, setUser } = useContext(UserContext);
    const [str, setStr] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setUser(str);
                setStr("");
            }}
        >
            <input
                type="text"
                value={str}
                onChange={(e) => setStr(e.target.value)}
            />
            <button>Change user</button>
        </form>
    );
}

export default ChangeUser;
