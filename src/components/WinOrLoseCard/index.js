import './index.css'

const WinOrLoseCard = props => {
  const {won, lose, score, playAgain} = props
  const scoreText = score
  const resultText = won ? 'You won' : 'You Lose'
  const ImgUrl = won
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const restartClick = () => {
    playAgain()
  }
  return (
    <div className="result-container">
      <img className="results-image" src={ImgUrl} alt="win or lose" />
      <div className="result-word-container">
        <h1 className="result-para">{resultText}</h1>
        <p className="score-label">Best Score</p>
        <p className="score-result">{scoreText}/12</p>
        <button className="retry-button" type="button" onClick={restartClick}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
