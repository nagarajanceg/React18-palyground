import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./page.css";

const createArray = (length) => [...Array(length)];

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
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
          />
        ))}
      </div>
      <div>{selectedStars + "/" + totalStars}</div>
    </div>
  );
};

export default StarRating;
