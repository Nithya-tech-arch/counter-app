import React, {useState} from "react";
import './style.css';

const App=()=>{
    let [score, setScore] = useState(0)
    

    return(
        <div>
            <h1 className="title">Helo People ..</h1>
            <h1 className="heading">Its my counter app !</h1>
            <h3 className="value">The value of score is {score}</h3>
            <button className="btn" onClick={()=>{(score<=24) ? setScore(score+1): setScore(score)}}>Increment</button>
            <button className="btn" onClick={()=>{(score > 0) ? setScore(score-1): setScore(0)}}>Decrement</button>
            <button className="btn" onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    )
}

export default App

