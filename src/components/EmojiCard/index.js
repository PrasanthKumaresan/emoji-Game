import './index.css'

const EmojiCard = props => {
  const {emoji, emojiClick} = props
  const {emojiName, id, emojiUrl} = emoji
  const emojiClicked = () => {
    emojiClick(id)
  }
  return (
    <li className="emoji-card-container">
      <button className="emoji-button">
        <img
          className="emoji-image"
          src={emojiUrl}
          alt={emojiName}
          onClick={emojiClicked}
        />
      </button>
    </li>
  )
}

export default EmojiCard
