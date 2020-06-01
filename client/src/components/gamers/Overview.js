import React, { useContext } from "react";
import ApexContext from "../context/apexContext";

const Overview = () => {
  const apexContext = useContext(ApexContext);

  const { getGamer, metadata, platformInfo, overallStats } = apexContext;

  const { activeLegendName } = metadata;
  const { platformSlug, platformUserId, avatarUrl } = platformInfo;
  const {
    level,
    kills,
    damage,
    season4Wins,
    season5Wins,
    rankScore,
  } = overallStats;

  return <div></div>;
};

export default Overview;
