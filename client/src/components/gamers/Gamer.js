import React, { useEffect, useContext, Fragment } from "react";
import ApexContext from "../context/apexContext";

const Gamer = ({ match }) => {
  const apexContext = useContext(ApexContext);

  const { getGamer, metadata, platformInfo } = apexContext;
  const { activeLegendName } = metadata;
  const { platformSlug } = platformInfo;

  const onClick = (e) => {
    e.preventDefault();

    console.log(platformSlug);
  };

  useEffect(() => {
    getGamer(match.params.platform, match.params.gamerId);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <button className="ui button" onClick={onClick}>
        Test
      </button>
    </Fragment>
  );
};

export default Gamer;
