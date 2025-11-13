import React from "react";

const ShimmerLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-5">
      <div className="animate-pulse text-gray-400 text-lg">Loading...</div>
    </div>
  );
};

export default ShimmerLoader;
