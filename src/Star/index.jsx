import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./page.css";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect, pos }) {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
      role="star"
      aria-label={`star-${pos}`}
    />
  );
}

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div className="rating">
      <h1>Delivery Rating</h1>
      <div>
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
            pos={i + 1}
          />
        ))}
      </div>
      <div id="result-rating">{selectedStars + "/" + totalStars}</div>
    </div>
  );
};

export default StarRating;
