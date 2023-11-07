"use client";
import React from "react";

const AddtoCard = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          console.log("click");
        }}
      >
        Add to Card
      </button>
    </div>
  );
};

export default AddtoCard;
