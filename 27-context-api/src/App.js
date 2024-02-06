import { useState } from "react";
import User from "./components/User";
import UserContext from "./context/UserContext";
import ChangeUser from "./components/ChangeUser";
import "./App.css";

function App() {
    const [user, setUser] = useState("Shelby");

    return (
        <UserContext.Provider value={{user, setUser}}>
            <div className="App">
                <User />
                <ChangeUser />
            </div>
        </UserContext.Provider>
    );
}

export default App;
