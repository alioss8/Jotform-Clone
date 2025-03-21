import React from "react";
import { FaStar } from "react-icons/fa";
import { Card } from "react-bootstrap";

const StarRating = ({ rating = 0 }) => {
  const safeRating = Number(rating); 
  if (isNaN(safeRating)) {
    console.error("Hata: rating geçersiz!", rating);
    return <p>Geçersiz puan</p>;
  }

  
  const fullStars = Math.floor(safeRating); 
  const hasHalfStar = safeRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <Card className="p-3 d-flex align-items-center" style={{ width: "220px",border:"none"}}>
      <div className="d-flex align-items-center">
        <span style={{ fontWeight: "bold", fontSize: "1.2rem", marginRight: "5px" }}>
          {safeRating.toFixed(1)}
        </span>
        <div style={{ display: "flex", gap: "2px" }}>
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} color="gold" size={24} />
          ))}
          
          {hasHalfStar && <FaStar key="half" color="gold" size={24} style={{ clipPath: "inset(0 50% 0 0)" }} />}

          {[...Array(emptyStars)].map((_, i) => (
            <FaStar key={`empty-${i}`} color="#ccc" size={24} />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default StarRating;
