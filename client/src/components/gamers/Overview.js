import React, { useContext } from "react";
import ApexContext from "../context/apexContext";
import RankInfo from "./stats/RankInfo";
import Level from "./stats/Level";
import Kills from "./stats/Kills";
import Damage from "./stats/Damage";
import Season4Wins from "./stats/Season4Wins";
import Season5Wins from "./stats/Season5Wins";
import ActiveLegend from "./legends/ActiveLegend";

const Overview = () => {
  const apexContext = useContext(ApexContext);
  const { gamer } = apexContext;
  const { platformInfo, metadata, segments } = gamer;

  return (
    <div>
      <div
        className="ui fluid card"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          maxWidth: "80rem",
          display: "flex",
        }}
      >
        {/* Lifetime Overview Header */}
        <div
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            display: "flex",
          }}
        >
          <h1>
            <img
              src="https://img.icons8.com/material-sharp/48/000000/globe--v2.png"
              alt=""
              style={{ height: "28px", width: "auto", marginRight: "10px" }}
            />
            Lifetime Overview
          </h1>
        </div>

        <br />
        {/* Rank info Portion */}
        <RankInfo />

        {/* small cards of level, kills, damage and times placed top 3 */}
        <div
          style={{
            display: "flex",
            marginTop: "-50px",
            alignContent: "center",
          }}
        >
          {segments[0].stats.level ? <Level /> : null}
          {segments[0].stats.kills ? <Kills /> : null}
          {segments[0].stats.damage ? <Damage /> : null}
          {segments[0].stats.season4Wins ? <Season4Wins /> : null}
          {segments[0].stats.season5Wins ? <Season5Wins /> : null}
        </div>
      </div>

      <div
        className="ui fluid card"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          maxWidth: "80rem",
          display: "flex",
        }}
      >
        {/* Lifetime Overview Header */}
        <div
          style={{
            marginLeft: "20px",
            marginTop: "10px",
            display: "flex",
          }}
        >
          <h1>
            <img
              src="https://img.icons8.com/wired/64/000000/apex-legends.png"
              alt=""
              style={{ height: "28px", width: "auto", marginRight: "10px" }}
            />
            Legends Overview
          </h1>
        </div>

        {/* Legends Specific Stats */}
        <div style={{ display: "flex" }}>
          <ActiveLegend />
        </div>
      </div>
    </div>
  );
};

export default Overview;
