import React, { Fragment } from "react";
import TestSVG from "../../components/TestSVG";
import TopBar from "../../components/TopBar";
import Shoes368Side from '../../components/Shoes368Side';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { COLOR_WAY } from '../../utilities/constants';

class MainPage extends React.Component {
  state = {
    eclipseColor: "red",
    rectangleColor: "blue",
  };

  handleChangeEclipseColor = (color) => {
    this.setState({ eclipseColor: color });
  };

  handleRectangleColor = (color) => {
    this.setState({ rectangleColor: color });
  };

  render() {
    const { eclipseColor, rectangleColor } = this.state;
    return (
      <Fragment>
        <TopBar />
        <Container className="py-5">
          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                <TestSVG eclipseColor={eclipseColor} rectangleColor={rectangleColor} />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Shoes368Side />
              </div>
            </Col>
            <Col>
              <div className="mb-5">
                <h4 className="mb-3">Eclipse</h4>
                <div className="d-flex align-items-center justify-content-center">
                  {COLOR_WAY.map((item) => {
                    return (
                      <Button variant="light" className="ml-2" onClick={() => this.handleChangeEclipseColor(item.value)}>
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="mb-5">
                <h4 className="mb-3">Rectangle</h4>
                <div className="d-flex align-items-center justify-content-center">
                  {COLOR_WAY.map((item) => {
                    return (
                      <Button variant="light" className="ml-2" onClick={() => this.handleRectangleColor(item.value)}>
                        {item.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default MainPage;
