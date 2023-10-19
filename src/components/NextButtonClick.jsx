
import NextButtonClickIcon from "../icons/NextButtonClickIcon";

const NextButtonClick = ({buttonClick}) => {
  return (
    <button className="story-btn" type="button" onClick={buttonClick}>
        <NextButtonClickIcon />
    </button>
  )
}

export default NextButtonClick;