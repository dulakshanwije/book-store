import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = () => {
  return (
    <div className="w-full flex items-center justify-center h-[300px]">
      <BeatLoader size={10} />
    </div>
  );
};

export default Spinner;
