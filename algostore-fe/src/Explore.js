import "./style/Explore.css";
import React, { useEffect, useState } from "react";
import AlgorithmPreview from "./AlgorithmPreview";

const Explore = (props) => {
  const { algorithmList, fetchingAlgorithmList } = props;

  const [exploreState, setExploreState] = useState({
    algorithmLoaded: new Map(),
    algorithmResource: new Map(),
  });

  useEffect(() => {
    const algorithmResourceBaseUrl = "/algorithm/";
    let isMounted = true;
    algorithmList.forEach((value) => {
      let algorithmResourceUrl = algorithmResourceBaseUrl + value.id;
      fetch(algorithmResourceUrl)
        .then((res) => res.json())
        .then((algorithm) => {
          if (isMounted) {
            setExploreState((state) => {
              return {
                ...state,
                algorithmLoaded: state.algorithmLoaded.set(algorithm.id, true),
                algorithmResource: state.algorithmResource.set(
                  algorithm.id,
                  algorithm
                ),
              };
            });
          }
        });
    });
    return () => {
      isMounted = false;
    };
  }, [setExploreState, algorithmList]);

  return (
    <div className="explore-container">
      <div className="algorithm-preview-container">
        {fetchingAlgorithmList ? (
          <div>Loading Algorithms</div>
        ) : (
          algorithmList.map((algorithm) => (
            <AlgorithmPreview
              key={algorithm.id}
              algorithmLoaded={exploreState.algorithmLoaded.get(algorithm.id)}
              algorithm={exploreState.algorithmResource.get(algorithm.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
