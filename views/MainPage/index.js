import React, { Fragment } from "react";
import TopBar from "../../components/TopBar";
import Shoes368Side from "../../components/Shoes368Side";
import ColorButtons from "../../components/ColorButtons";
import { Col, Row } from "react-bootstrap";
import { COLOR_WAY } from "../../utilities/constants";

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
            <Col lg={7}>
              <div className="d-flex justify-content-center align-items-center">
                <Shoes368Side {...this.state} />
              </div>
            </Col>
            <Col lg={5}>
              <ColorButtons
                shoePartName="Upper Side"
                stateName="upperSideColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.upperSideColor}
              />
              <ColorButtons
                shoePartName="Upper Top"
                stateName="upperTopColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.upperTopColor}
              />

              <ColorButtons
                shoePartName="Upper Lining"
                stateName="upperLiningColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.upperLiningColor}
              />

              <ColorButtons
                shoePartName="Quarter"
                stateName="quarterColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.quarterColor}
              />

              <ColorButtons
                shoePartName="Tongue"
                stateName="tongueColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.tongueColor}
              />

              <ColorButtons
                shoePartName="Inner"
                stateName="innerColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.innerColor}
              />

              <ColorButtons
                shoePartName="Back Tab"
                stateName="backTabColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.backTabColor}
              />

              <ColorButtons
                shoePartName="Toe Cap"
                stateName="toeCapColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.toeCapColor}
              />

              <ColorButtons
                shoePartName="Toe Cap Guard"
                stateName="secondToeCapColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.secondToeCapColor}
              />

              <ColorButtons
                shoePartName="Mid Sole"
                stateName="midSoleColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.midSoleColor}
              />

              <ColorButtons
                shoePartName="Woven"
                stateName="wovenColor"
                colors={COLOR_WAY}
                changeColor={this.handleChangeColor}
                stateNow={this.state.wovenColor}
              />
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
