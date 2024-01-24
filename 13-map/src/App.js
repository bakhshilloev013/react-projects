import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const texts = [
    'first',
    'second',
    'third',
    'fourth'
];

function App() {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
        setCount(count + 1);
    }

    return <div className="App">
        <Counter count={count} />
        {texts.map(((text, i) => {
            return <Button onClick={incrementCounter} text={text} key={i}  />
        }))}
    </div>;
}

export default App;
