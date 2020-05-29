import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark" style={{ height: "5em" }}>
        <div>
          <Link to="/">
            <Navbar.Brand style={{ fontSize: "30px" }}>
              <img
                alt=""
                src="https://img.icons8.com/color/48/000000/apex-legends.png"
                width="50"
                height="50"
              />
              Apex Legends Stats Tracker
            </Navbar.Brand>
          </Link>
        </div>

        <div className="ml-auto">
          <Link to="/">
            <button className="ui button" style={{ backgroundColor: "white" }}>
              Home
            </button>
          </Link>
        </div>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
