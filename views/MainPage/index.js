import React, { Fragment } from "react";
import { withRouter } from 'next/router';

import TopBar from "../../components/TopBar";
import ColorButtons from "../../components/ColorButtons";
import Shoes368Side from "../../components/Shoes368Side";
import Shoes368Back from "../../components/Shoes368Back";
import Shoes368Bottom from "../../components/Shoes368Bottom";
import TitleAnimated from "../../components/TitleAnimated";
import BackTextInput from "../../components/BackTextInput";
import Footer from "../../components/Footer";

import { Col, Row, Button } from "react-bootstrap";
import { animated, Spring, Trail } from "react-spring/renderprops.cjs";

import {
  CUSTOMIZE_368,
  COLOR_DEFAULT_WHITE,
  COLOR_DEFAULT_BLACK,
  SHOES_SIZE,
} from "../../utilities/constants";

class MainPage extends React.Component {
  state = {
    toeCapColor: COLOR_DEFAULT_WHITE,
    secondToeCapColor: COLOR_DEFAULT_WHITE,
    midSoleColor: COLOR_DEFAULT_WHITE,
    tongueColor: COLOR_DEFAULT_WHITE,
    innerColor: COLOR_DEFAULT_WHITE,
    upperSideColor: COLOR_DEFAULT_WHITE,
    backTabColor: COLOR_DEFAULT_WHITE,
    upperLiningColor: COLOR_DEFAULT_WHITE,
    quarterColor: COLOR_DEFAULT_WHITE,
    upperTopColor: COLOR_DEFAULT_WHITE,
    wovenColor: COLOR_DEFAULT_WHITE,
    outSoleColor: COLOR_DEFAULT_WHITE,

    stitchingColor: COLOR_DEFAULT_BLACK,

    backTextLeft: "",
    backTextRight: "",
    clientName: "",
    shoesSize: "",
  };

  componentDidUpdate = (prevProps) => {
    const { query: { order = "" } = {} } = this.props.router || {};
    const { query: { order: prevOrder = "" } = {} } = prevProps.router || {};

    if(order !== prevOrder) {
      const decodeOrder = window.atob(order);
      const stateObject = JSON.parse(decodeOrder);
      this.setState(stateObject);
    }
  }

  handleChangeColor = (colorState, color) => {
    this.setState({ [colorState]: color });
  };

  handleChangeBackText = (backTextState, text) => {
    if (text.length > 4) return null;
    this.setState({ [backTextState]: text });
  };

  handleClientName = (name) => {
    if (name.length > 100) return null;
    this.setState({ clientName: name });
  };

  handleChangeSize = (size) => {
    this.setState({ shoesSize: size });
  };

  handleOrderButton = () => {
    const stringState = JSON.stringify(this.state);
    const hash = window.btoa(stringState);
    this.props.router.push(`?order=${hash}`);

    alert('copy dan paste link di URL 👆')
  };

  render() {
    return (
      <Fragment>
        <TopBar />
        <div className="py-5">
          <Row>
            <Col lg={7} xs={12}>
              <TitleAnimated title="1.) Side View :" />
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

              <TitleAnimated className="ml-3" title="2.) Back View :" />
              <Spring
                native
                delay={600}
                from={{ transform: "translate3d(-800px,0,0)" }}
                to={{ transform: "translate3d(0,0px,0)" }}
              >
                {(props) => (
                  <animated.div style={props}>
                    <Shoes368Back {...this.state} />
                  </animated.div>
                )}
              </Spring>
              <TitleAnimated className="ml-3" title="3.) Bottom View :" />
              <Spring
                native
                delay={600}
                from={{ transform: "translate3d(-800px,0,0)" }}
                to={{ transform: "translate3d(0,0px,0)" }}
              >
                {(props) => (
                  <animated.div style={props}>
                    <Shoes368Bottom {...this.state} />
                  </animated.div>
                )}
              </Spring>
              <TitleAnimated className="ml-3 mb-5" title="4.) Back Text :" />
              <Row className="p-3 mb-5">
                <Col xs={6}>
                  <BackTextInput
                    stateName="backTextLeft"
                    onChange={this.handleChangeBackText}
                    value={this.state.backTextLeft}
                  />
                </Col>
                <Col xs={6}>
                  <BackTextInput
                    stateName="backTextRight"
                    onChange={this.handleChangeBackText}
                    value={this.state.backTextRight}
                  />
                </Col>
              </Row>
              <TitleAnimated className="ml-3 mb-5" title="5.) Client Name :" />
              <Row className="p-3 mb-5">
                <Col xs={8}>
                  <input
                    value={this.state.clientName}
                    className="p-3"
                    onChange={(e) => this.handleClientName(e.target.value)}
                    style={{
                      fontSize: 18,
                      width: "100%",
                      height: 70,
                      borderRadius: 5,
                      border: "1px solid rgba(0,0,0,.125)",
                    }}
                  />
                </Col>
              </Row>
              <TitleAnimated className="ml-3 mb-5" title="6.) Size :" />
              <Row className="p-3 mb-5">
                <Col xs={12}>
                  {SHOES_SIZE.map((item) => {
                    return (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="mr-2 px-3"
                        active={item.size === this.state.shoesSize}
                        disabled={!item.available}
                        onClick={() => this.handleChangeSize(item.size)}
                      >
                        {item.size}
                      </Button>
                    );
                  })}
                </Col>
              </Row>
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
        <div>
          <Row>
            <Col xs={12}>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  variant="success"
                  size="lg"
                  className="px-5 py-3 mb-5"
                  onClick={() => this.handleOrderButton()}
                >
                  ORDER
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default withRouter(MainPage);
