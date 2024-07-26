import './index.css'

const NavBar = props => {
  const {score, totalScore, won, lose} = props
  let navbarpara
  let navCont
  if (won === true || lose === true) {
    navbarpara = 'navbar-display-none'
    navCont = 'NavBar-container-display'
  } else {
    navbarpara = 'navbar-para'
    navCont = 'NavBar-container'
  }
  return (
    <div className={navCont}>
      <div className="nav-img">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navbar-para">Emoji Game</h1>
      </div>
      <div className="nav-para-containerbar">
        <p className={navbarpara}>Score: {score}</p>
        <p className={navbarpara}>Top Score: {totalScore}</p>
      </div>
    </div>
  )
}

export default NavBar
