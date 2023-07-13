const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard-section">
        <p className="label">Current Score</p>
        <p className="score">{currentScore}</p>
      </div>
      <div className="scoreboard-section">
        <p className="label">Best Score</p>
        <p className="score">{bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
