import starIcon from "../assets/icon-star.svg";
import RatingButton from "./RatingButton";

const RatingCard = ({ selectedRating, error, onRatingSelect, onSubmit }) => {
  return (
    <div className="flex flex-col p-8">
      <div className="w-12 h-12 bg-darkBlue flex items-center justify-center rounded-full">
        <img src={starIcon} alt="Star icon" />
      </div>

      <h1 className="text-white text-[28px] font-semibold mt-8 mb-2">
        How did we do?
      </h1>

      <p className="text-lightGrey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="flex item-center justify-between my-8">
        {[1, 2, 3, 4, 5].map((rating) => (
          <RatingButton
            key={rating}
            text={rating}
            isSelected={rating === selectedRating}
            onClick={onRatingSelect}
          />
        ))}
      </div>

      {error && <p className="text-red-400 -mt-3 mb-3">{error.message}</p>}

      <button
        className="w-full bg-orange text-white uppercase tracking-wider rounded-full py-3 hover:text-orange hover:bg-white"
        onClick={onSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
