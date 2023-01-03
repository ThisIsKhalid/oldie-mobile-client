import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center border">
      <ClockLoader color="#000000" size={69} speedMultiplier={3} />
    </div>
  );
};

export default Loading;
