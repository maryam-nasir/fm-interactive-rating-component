import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const handleRatingSelect = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  return (
    <>
      {formSubmitted ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard
          selectedRating={rating}
          onRatingSelect={handleRatingSelect}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
