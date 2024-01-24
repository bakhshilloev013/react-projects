import { useState } from "react";
import handlerFormSubmit from "../utils/hanlerFormSubmit";

function Login() {
    const [data, setData] = useState({ username: "", password: "" });

    function handleChangeInput(text, name) {
        setData({ ...data, [name]: text });
    }

    return (
        <>
            <h1>Login form</h1>
            <form
                onSubmit={(e) => {
                    handlerFormSubmit(e, data);
                }}
            >
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleChangeInput(e.target.value, 'username')}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleChangeInput(e.target.value, "password")}
                    />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;
