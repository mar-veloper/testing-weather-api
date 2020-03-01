import React from "react";

const LoaderDot = () => {
  return (
    <>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default LoaderDot;
