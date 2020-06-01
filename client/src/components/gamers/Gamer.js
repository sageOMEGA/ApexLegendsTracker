import React, { useEffect, useContext, Fragment } from "react";
import Overview from "./Overview";
import ActiveLegend from "./ActiveLegend";
import ApexContext from "../context/apexContext";
import { Tabs, Tab } from "react-bootstrap";

const Gamer = ({ match }, props) => {
  const apexContext = useContext(ApexContext);
  const { getGamer } = apexContext;

  useEffect(() => {
    getGamer(match.params.platform, match.params.gamerId);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div>
        <Tabs
          defaultActiveKey="overview"
          style={{ margin: "20px", fontSize: "20px", height: "40px" }}
        >
          <Tab eventKey="overview" title="Overview">
            <div style={{ margin: "20px" }}>
              <Overview />
            </div>
          </Tab>
          <Tab eventKey="Active Legend" title="Active Legend">
            <div style={{ margin: "25px" }}>
              <ActiveLegend />
            </div>
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};

export default Gamer;
