import handlerFormSubmit from "../utils/hanlerFormSubmit";

function Login() {
    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handlerFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;
