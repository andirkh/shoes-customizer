import React, { Fragment } from "react";
import TestSVG from "../../components/TestSVG";

const COLORIO = [
  { value: "red", label: "University Red" },
  { value: "blue", label: "Royale Blue" },
  { value: "yellow", label: "Canary" },
  { value: "Black", label: "Black" },
  { value: "White", label: "White" },
];

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
        <TestSVG eclipseColor={eclipseColor} rectangleColor={rectangleColor} />
        <h3>Eclipse</h3>
        {COLORIO.map((item) => {
          return (
            <button onClick={() => this.handleChangeEclipseColor(item.value)}>
              {item.label}
            </button>
          );
        })}

        <h3>Rectangle</h3>
        {COLORIO.map((item) => {
          return (
            <button onClick={() => this.handleRectangleColor(item.value)}>
              {item.label}
            </button>
          );
        })}
      </Fragment>
    );
  }
}

export default MainPage;
