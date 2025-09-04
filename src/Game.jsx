import Card from "./Card";
import { useState, useEffect } from "react";
function Game() {
  const [currentScore, setCurrentScore] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  let requests = [];

  useEffect(() => {
    const randomIDs = [];
    while (randomIDs.length < 15) {
      const id = Math.floor(Math.random() * 151) + 1;
      if (!randomIDs.includes(id)) {
        randomIDs.push(id);
      }
    }
    requests = randomIDs.map((id) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .catch((e) => console.log(e));
    });
    Promise.all(requests)
      .then((data) => {
        setCards(data); // store all fetched Pokémon at once
      })
      .catch((err) => console.log(err));
  }, []);

  cards.forEach((card) => {
    console.log(card);
  });

  function handleClickedCard(id) {
    if (clickedCards.includes(id)) {
      alert("You lost");
      setCurrentScore(0);
      setClickedCards([]);
      setCards((prev) => shuffleArray(prev));
    } else {
      setCurrentScore((prevScore) => {
        const newScore = prevScore + 1;
        setBest((prevBest) => Math.max(prevBest, newScore));
        return newScore;
      });

      setClickedCards((prev) => [...prev, id]);
      setCards((prev) => shuffleArray(prev));
    }
  }
  function shuffleArray(array){
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[random]]=[newArray[random], newArray[i]];
    }
    return newArray;
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
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              img={card.sprites.front_default}
              title={card.name}
              onClick={() => {
                handleClickedCard(card.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Game;
