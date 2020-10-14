import React, { Fragment } from "react";
import TopBar from "../../components/TopBar";
import Shoes368Side from "../../components/Shoes368Side";
import ColorButtons from "../../components/ColorButtons";
import { Col, Row } from "react-bootstrap";
import { animated, Spring, Trail } from "react-spring/renderprops.cjs";

import { CUSTOMIZE_368 } from "../../utilities/constants";

class MainPage extends React.Component {
  state = {
    toeCapColor: "white",
    secondToeCapColor: "white",
    midSoleColor: "white",
    tongueColor: "white",
    innerColor: "white",
    upperSideColor: "white",
    backTabColor: "white",
    upperLiningColor: "white",
    quarterColor: "white",
    upperTopColor: "white",
    wovenColor: "white",

    stitchingColor: "black",
  };

  handleChangeColor = (colorState, color) => {
    this.setState({ [colorState]: color });
  };

  render() {
    return (
      <Fragment>
        <div className="py-5">
          <Row>
            <Col lg={7} xs={12}>
              <Spring
                native
                delay={500}
                from={{ transform: "translate3d(-1000px,0,0)" }}
                to={{ transform: "translate3d(0,0px,0)" }}
              >
                {(props) => (
                  <animated.div style={props}>
                    <Shoes368Side {...this.state} />
                  </animated.div>
                )}
              </Spring>
            </Col>
            <Col lg={5} xs={12}>
              <Trail
                items={CUSTOMIZE_368}
                keys={(item) => item.stateName}
                from={{ transform: "translate3d(400px, 0,0)" }}
                to={{ transform: "translate3d(0,0px,0)" }}
              >
                {(item) => (props) => (
                  <animated.div style={props}>
                    <ColorButtons
                      shoePartName={item.shoePartName}
                      stateName={item.stateName}
                      colors={item.colors}
                      changeColor={this.handleChangeColor}
                      stateNow={this.state[item.stateName]}
                    />
                  </animated.div>
                )}
              </Trail>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
