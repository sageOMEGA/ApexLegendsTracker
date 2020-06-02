import React, { useContext } from "react";
import ApexContext from "../context/apexContext";
import { Spinner } from "react-bootstrap";

const Overview = () => {
  const apexContext = useContext(ApexContext);

  const { gamer, isEmpty } = apexContext;

  const { platformInfo, metadata, segments } = gamer;

  if (isEmpty(gamer) || isEmpty(platformInfo) || isEmpty(segments[0])) {
    return (
      <div style={{ textAlign: "center", marginTop: "20rem" }}>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  } else {
    return (
      <div
        className="ui fluid card"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
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

        <div style={{ display: "flex", marginTop: "-50px" }}>
          <div
            className="ui raised card"
            style={{
              width: "10rem",
              margin: "1rem",
              backgroundColor: "#333333",
              color: "#EFEFEF",
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
        </div>
      </div>
    );
  }
};

export default Overview;
