import "./styles/App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/ScoreBoard";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setCurrentScore(currentScore + 1);
    } else {
      setCurrentScore(0);
    }
  };

  return (
    <div className="App">
      <Header />
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Gameboard handleScore={handleScore} />
    </div>
  );
};

export default App;
