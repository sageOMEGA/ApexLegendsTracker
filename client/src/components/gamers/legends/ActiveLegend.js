import React, { useContext } from "react";
import ApexContext from "../../context/apexContext";

const ActiveLegend = () => {
  const apexContext = useContext(ApexContext);
  const { gamer } = apexContext;
  const { segments } = gamer;

  return (
    <div className="ui raised card">
      <h1>Hello World</h1>
    </div>
  );
};

export default ActiveLegend;
