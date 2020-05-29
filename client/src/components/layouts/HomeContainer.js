import React from "react";

const HomeContainer = () => {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "10rem" }}
    >
      <form className="ui form">
        <div className="field">
          <label>Platform</label>
          <select className="ui dropdown">
            <option value="psn">PlayStation</option>
            <option value="xbl">XBox Live</option>
            <option value="origin">Origin</option>
          </select>
        </div>

        <div className="field">
          <label>Gamer ID</label>
          <input type="text" name="gamer-id" placeholder="Enter Gamer ID" />
        </div>
      </form>
    </div>
  );
};

export default HomeContainer;
