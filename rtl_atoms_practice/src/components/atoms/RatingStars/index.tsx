type RatingStarsProps = {
  rating: number;
};

const TOTAL_STARS = 5;

const RatingStars = ({ rating }: RatingStarsProps) => {
  const rounded = Math.round(rating);
  const stars = "*".repeat(rounded) + "-".repeat(TOTAL_STARS - rounded);

  return (
    <span className="stars" role="img" aria-label={`Rated ${rating} out of 5`}>
      {stars}
    </span>
  );
};

export default RatingStars;
