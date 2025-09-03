import Card from "./Card";
import {useState, useEffect} from 'react';
function Game(){

    const [currentScore, setCurrentScore] = useState(0);
    const [best, setBest] = useState(0);
    const [cards, setCards] = useState([]);

     useEffect(() => {
       fetch("https://pokeapi.co/api/v2/pokemon/")
         .then((response) => response.json())
         .then((data) => console.log(data))
         .catch((e) => console.log(e));
     }, []);

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
        <div className="header">
          <div className="titleContainer">
            <h1>Welcome to Memory Game!</h1>
            <h3>DO NOT choose the same card or you lose!</h3>
          </div>
          <div className="scoreContainer">
            <p>
              Current Score: <strong>{currentScore}</strong>
            </p>
            <p>
              Best Score: <strong>{best}</strong>
            </p>
          </div>
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