import Card from "./Card";
import {useState} from 'react';
function Game(){

    const [currentScore, setCurrentScore] = useState(0);
    const [best, setBest] = useState(0);

    function handleIncrementCurrent(){
        setCurrentScore(currentScore => currentScore + 1);
    }
    function handleChangeBest(){
        if(best < currentScore) {
            setBest(currentScore);
        }
    }


    return (
      <div className="gameContainer">
        <h1>Welcome to Memory Game!</h1>
        <h3>DO NOT choose the same card or you lose!</h3>
        <div className="scoreContainer">
          <p>Current Score: {currentScore}</p>
          <p>Best Score: {best}</p>
        </div>
        <hr />
        <div className="cardContainer">
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" /> 
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
          <Card img="" title="" />
        </div>
      </div>
    );
}
export default Game;