import './RandomNumber.css';
import { useState } from 'react';
import generateRandomNum from '../utils/generateRandomNum';
    
function RandomNumber(props) {
    const { around } = props;
    const [randomNum, setRandomNum] = useState(generateRandomNum(around));
    const changeRandomNum = () => {
        setRandomNum(generateRandomNum(around));
    }

    return (
        <div>
            <h1 className="num">{ randomNum }</h1>
            <button className="btn" onClick={changeRandomNum}>Generate new random number</button>
        </div>
    )
}

export default RandomNumber;