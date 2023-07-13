import "./styles/App.css";
import {useState, useEffect} from 'react';
import Gameboard from "./components/Gameboard";
import Scoreboard from "./components/Scoreboard";

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
      <Gameboard />
    </div>
  );
};

export default App;
