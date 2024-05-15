import { useState } from "react";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  const [error, setError] = useState(null);

  const handleRatingSelect = (selectedRating) => {
    setRating(selectedRating);
    setError(null);
  };

  const handleSubmit = () => {
    if (!rating) {
      setError({
        message: "Please select rating first before submitting.",
      });
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <>
      {formSubmitted ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard
          selectedRating={rating}
          error={error}
          onRatingSelect={handleRatingSelect}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default App;
