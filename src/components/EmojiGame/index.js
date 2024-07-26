/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickEmojiList: [], score: 0, totalScore: 0, won: false, lose: false}

  emojiClick = clickid => {
    const {emojisList} = this.props
    const {clickEmojiList} = this.state
    if (clickEmojiList.includes(clickid)) {
      console.log(clickEmojiList.length === emojisList.len)
      console.log(emojisList.length)
      this.setState(prevState => ({
        clickEmojiList: [],
        totalScore:
          prevState.totalScore > prevState.score
            ? prevState.totalScore
            : prevState.score,
        lose: true,
      }))
    } else {
      this.setState(prevState => ({
        clickEmojiList: [...clickEmojiList, clickid],
        score: prevState.score + 1,
      }))
    }
  }

  displayWhat = () => {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, totalScore, won, lose} = this.state
    console.log(shuffledEmojisList)
    if (won === true || lose === true) {
      return (
        <WinOrLoseCard
          won={won}
          lose={lose}
          score={score}
          playAgain={this.playAgain}
        />
      )
    }
    return (
      <ul className="emoji-container">
        {shuffledEmojisList.map(eachemoji => (
          <EmojiCard
            emoji={eachemoji}
            key={eachemoji.id}
            emojiClick={this.emojiClick}
          />
        ))}
      </ul>
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState(prevState => ({
      clickEmojiList: [],
      won: false,
      lose: false,
      totalScore: prevState.totalScore,
      score: 0,
    }))
  }

  wonMatch = () => {
    console.log('trigerred')
    this.setState(prevState => ({
      clickEmojiList: [],
      totalScore:
        prevState.totalScore > prevState.score
          ? prevState.totalScore
          : prevState.score,
      won: true,
    }))
  }

  render() {
    const {clickEmojiList, score, totalScore, won, lose} = this.state
    const {emojisList} = this.props
    if (clickEmojiList.length === emojisList.length) {
      this.wonMatch()
    }
    return (
      <div>
        <div className="navbar">
          <NavBar score={score} totalScore={totalScore} won={won} lose={lose} />
        </div>
        <div className="emojigame-container">{this.displayWhat()}</div>
      </div>
    )
  }
}

export default EmojiGame
