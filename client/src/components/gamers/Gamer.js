import React, { useEffect, useContext } from "react";
import ApexContext from "../context/apexContext";

const Gamer = ({ match }) => {
  const apexContext = useContext(ApexContext);

  const { getGamer } = apexContext;

  useEffect(() => {
    getGamer(match.params.platform, match.params.gamerId);
  }, []);

  return <div>Hello Gamers</div>;
};

export default Gamer;
