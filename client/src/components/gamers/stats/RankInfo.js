import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const RankInfo = () => {
  const apexContext = useContext(ApexContext);
  const { gamer } = apexContext;
  const { platformInfo, metadata, segments } = gamer;

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#701C1C",
        height: "10rem",
      }}
    >
      <img
        src={segments[0].stats.rankScore.metadata.iconUrl}
        alt="Rank"
        style={{
          maxHeight: "100px",
          maxWidth: "100px",
          marginLeft: "10px",
        }}
      />
      <div style={{ marginLeft: "20px", marginTop: "0px" }}>
        <h2 style={{ marginTop: "15px", color: "#CBB9B9" }}>
          {segments[0].stats.rankScore.metadata.rankName}
        </h2>
        <h3 style={{ marginTop: "-5px", color: "#EFEFEF" }}>
          Rank Score: {segments[0].stats.rankScore.value}
        </h3>
      </div>
    </div>
  );
};

export default RankInfo;
