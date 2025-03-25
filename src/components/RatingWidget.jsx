import { useState } from "react";
import PropTypes from "prop-types";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="rating-widget">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          style={{
            cursor: "pointer",
            fontSize: "20px",
            color: star <= (hoveredRating || rating) ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
      <button onClick={() => rating > 0 && onRatingSubmit(productId, rating)}>
        Submit Rating
      </button>
    </div>
  );
};

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;
