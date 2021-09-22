import "./style/Home.css";
import React from "react";
import CallToAction from "./CallToAction";

function Home() {
  const listCTA = "List your algorithm to sell insights";
  const insightsCTA = "Get insights on your data";
  const exploreCTA = "Explore the algorithms";
  const aboutUsCTA = "Learn about how it works";

  return (
    <div className="home-container">
      <div className="home-summary left-justify">
        <h1>The marketplace for insights on your data</h1>
        <p>
          AlgoStore offers state of the art algorithms for your business needs.
          The algorithm travels to your data and delivers powerful solutions for
          your unique problems. Leverage the expertise of domain level experts
          in the marketplace at scale. Your data never has to leave security of
          your storage solution.
        </p>
      </div>
      <br></br>
      <div className="home-cta-container left-justify">
        <CallToAction link={"/list"} message={listCTA} order={"2"} />
        <CallToAction link={"/insights"} message={insightsCTA} order={"1"} />
        <CallToAction link={"/explore"} message={exploreCTA} order={"0"} />
        <CallToAction link={"/about"} message={aboutUsCTA} order={"3"} />
      </div>
    </div>
  );
}

export default Home;
