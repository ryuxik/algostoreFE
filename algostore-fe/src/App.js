import "./style/App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Explore from "./Explore";

function App() {
  const [appState, setAppState] = useState({
    fetchingAlgorithmList: true,
    algorithmList: [],
  });

  useEffect(() => {
    let isMounted = true;
    const algorithmsUrl = "/algorithms";
    fetch(algorithmsUrl)
      .then((res) => res.json())
      .then((algorithmList) => {
        if (isMounted) {
          setAppState((state) => {
            return {
              ...state,
              fetchingAlgorithmList: false,
              algorithmList,
            };
          });
        }
      });
  }, [setAppState]);

  return (
    <div className="algostore-app">
      <Navbar />
      <Switch>
        <Route path={"/list"}>
          <div>list page</div>
        </Route>
        <Route path="/insights">
          <div>insights page</div>
        </Route>
        <Route path="/about">
          <divv>about page</divv>
        </Route>
        <Route path="/explore">
          <Explore
            algorithmList={appState.algorithmList}
            fetchingAlgorithmList={appState.fetchingAlgorithmList}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
