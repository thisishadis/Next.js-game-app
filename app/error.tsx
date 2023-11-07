"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error = ({ error }: Props) => {
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has accirred</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default Error;
