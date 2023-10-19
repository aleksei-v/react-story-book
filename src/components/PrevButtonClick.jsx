
import PrevButtonClickIcon from "../icons/PrevButtonClickIcon";

const PrevButtonClick = ({ buttonClick, instanceType }) => {
  return (
    <button className={`story-btn ${instanceType && 'start-button'}`} type="button" onClick={buttonClick}>
      <PrevButtonClickIcon />
    </button>
  );
};

export default PrevButtonClick;