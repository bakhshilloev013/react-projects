import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
    return (
        <div className="App">
            <PetInfo animal="cat" age={13} />
            <PetInfo animal="dog" age={3} />
        </div>
    );
}

export default App;
