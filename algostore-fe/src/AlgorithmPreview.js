import "./style/AlgorithmPreview.css";
import React from "react";

const AlgorithmPreview = (props) => {
  const { algorithmLoaded, algorithm } = props;

  return (
    <div className="algorithm-container">
      {algorithmLoaded ? (
        <div className="algorithm-details">
          <div className="algorithm-category">{algorithm.category}</div>
          <div className="algorithm-name">{algorithm.name}</div>
          <br></br>
          <div className="algorithm-summary">{algorithm.summary}</div>
        </div>
      ) : (
        <div>loading....</div>
      )}
    </div>
  );
};

export default AlgorithmPreview;
