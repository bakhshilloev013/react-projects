import "./App.css";
import Info from "./components/Info";

function App() {
    return <div className="App">
        <Info />
        {/* CSS rule from the Info CSS module doesn't work here */}
        <h1>Hello from App component</h1>
        <h2>Heading in the App component</h2>
        <button className="my-button">Click me in the App component</button>
    </div>;
}

export default App;
