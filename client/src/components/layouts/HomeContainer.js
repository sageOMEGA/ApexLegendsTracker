import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const [platform, setPlatform] = useState("psn");
  const [gamerId, setGamerId] = useState("");

  // When User Changes Platform
  const onPlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  // When User Enters Gamer ID
  const onGamerIdChange = (e) => {
    setGamerId(e.target.value);
  };

  // When User submits
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "10rem", width: "35rem" }}
    >
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Platform</label>
          <select
            className="ui dropdown"
            type="text"
            name="platform"
            onChange={onPlatformChange}
            required
          >
            <option value="psn" default>
              PlayStation
            </option>
            <option value="xbl">XBox Live</option>
            <option value="origin">Origin</option>
          </select>
        </div>

        <div className="field">
          <label>Gamer ID</label>
          <input
            type="text"
            name="gamer_id"
            placeholder="Enter Gamer ID"
            onChange={onGamerIdChange}
            required
          />
        </div>
        <Link to={`/${platform}/${gamerId}`}>
          <input className="ui button" type="submit" value="Submit"></input>
        </Link>
      </form>
    </div>
  );
};

export default HomeContainer;
