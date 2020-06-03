import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const Season4Wins = () => {
  const apexContext = useContext(ApexContext);
  const { gamer } = apexContext;
  const { segments } = gamer;

  return (
    <div
      className="ui raised card"
      style={{
        width: "17rem",
        margin: "10px",
        backgroundColor: "#333333",
        color: "#EFEFEF",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h3>Season 4 Wins</h3>
        <h1 style={{ marginTop: "-20px", fontSize: "45px" }}>
          {segments[0].stats.season4Wins.value}
        </h1>
      </div>
    </div>
  );
};

export default Season4Wins;
