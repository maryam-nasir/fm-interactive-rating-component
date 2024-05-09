const RatingButton = ({ text, isSelected, onClick }) => {
  return (
    <button
      className={`text-lightGrey bg-darkBlue w-12 h-12 rounded-full hover:bg-orange hover:text-white ${
        isSelected ? "text-white bg-mediumGrey" : ""
      }`}
      onClick={() => onClick(text)}
    >
      {text}
    </button>
  );
};

export default RatingButton;
