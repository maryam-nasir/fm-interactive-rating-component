import thankYouIllustration from "../assets/illustration-thank-you.svg";

const ThankYouCard = ({ rating }) => {
  return (
    <div className="flex flex-col items-center px-10 py-12">
      <img src={thankYouIllustration} alt="Payment done illustration" />

      <p className="text-orange bg-darkBlue rounded-full my-8 px-4 py-1">
        You selected {rating} out of 5
      </p>

      <h1 className="text-white text-3xl font-medium">Thank you!</h1>

      <p className="text-lightGrey text-center mt-3">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYouCard;
