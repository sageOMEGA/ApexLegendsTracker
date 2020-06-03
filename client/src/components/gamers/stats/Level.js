import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const Level = () => {
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
        display: "iniline-block",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h3>Level</h3>
        <h1 style={{ marginTop: "-20px", fontSize: "45px" }}>
          {segments[0].stats.level.value}
        </h1>
        <p style={{ marginTop: "-20px" }}>
          Top {100 - segments[0].stats.level.percentile}%{" "}
        </p>
      </div>
    </div>
  );
};

export default Level;
