import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Card } from "react-bootstrap";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Card className="p-3 d-flex align-items-center" style={{ width: "200px" }}>
      <div className="d-flex align-items-center">
        <span style={{ fontWeight: "bold", fontSize: "1.2rem", marginRight: "5px" }}>
          {rating.toFixed(1)}
        </span>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} color="gold" size={20} />
        ))}
        {halfStar && <FaStarHalfAlt color="gold" size={20} />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={i + fullStars + 1} color="#ccc" size={20} />
        ))}
      </div>
    </Card>
  );
};

export default function App() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <StarRating rating={3.8} />
    </div>
  );
}
