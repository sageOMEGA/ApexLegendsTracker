import React, { useEffect, useContext } from "react";
import Overview from "./Overview";
import ApexContext from "../context/apexContext";
import { Spinner } from "react-bootstrap";

const Gamer = ({ match }, props) => {
  const apexContext = useContext(ApexContext);
  const { getGamer, loading, gamer, isEmpty } = apexContext;
  const { platformInfo, segments } = gamer;

  const originIcon = "https://img.icons8.com/color/48/000000/origin.png";
  const psnIcon = "https://img.icons8.com/color/48/000000/play-station.png";
  const xblIcon = "https://img.icons8.com/color/48/000000/xbox--v1.png";

  const iconGenerate = (plat) => {
    if (plat === "origin") {
      return originIcon;
    } else if (plat === "psn") {
      return psnIcon;
    } else if (plat === "xbl") {
      return xblIcon;
    } else {
      return null;
    }
  };

  useEffect(() => {
    getGamer(match.params.platform, match.params.gamerId);
    // eslint-disable-next-line
  }, []);

  if (loading || isEmpty(gamer)) {
    return (
      <div style={{ textAlign: "center", marginTop: "20rem" }}>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  } else {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
        <div>
          <div
            style={{ display: "flex", marginTop: "20px", marginLeft: "20px" }}
          >
            <img
              className="ui medium circular image"
              src={platformInfo.avatarUrl}
              alt=""
              style={{ height: "10rem", width: "auto" }}
            />
            <div style={{ marginLeft: "30px", marginTop: "20px" }}>
              <h2>
                <img src={iconGenerate(platformInfo.platformSlug)} alt="" />
                {platformInfo.platformUserId}
              </h2>
            </div>
          </div>
          <br />
          <Overview />
        </div>

        <div>
          <div style={{ position: "sticky", top: 80 }}>
            <img
              src={segments[1].metadata.tallImageUrl}
              className="fluid"
              alt=""
              style={{
                height: "671px",
                marginLeft: "50px",
                marginTop: "2px",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Gamer;
