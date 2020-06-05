import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const Damage = () => {
  const apexContext = useContext(ApexContext);
  const { gamer } = apexContext;
  const { segments } = gamer;

  return (
    <div
      className="ui raised card"
      style={{
        width: "18rem",
        margin: "5px",
        backgroundColor: "#333333",
        color: "#EFEFEF",
        display: "iniline-block",
      }}
    >
      <div style={{ margin: "10px" }}>
        <h3>Damage</h3>
        <h1 style={{ marginTop: "-20px", fontSize: "38px" }}>
          {segments[0].stats.damage.displayValue}
        </h1>
        <p style={{ marginTop: "-10px" }}>
          Top {100 - segments[0].stats.damage.percentile}%{" "}
        </p>
      </div>
    </div>
  );
};

export default Damage;
