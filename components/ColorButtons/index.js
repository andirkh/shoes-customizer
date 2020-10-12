import React from "react";
import { Button } from "react-bootstrap";

class ColorButtons extends React.Component {
  render() {
    const {
      shoePartName = "",
      stateName = "",
      stateNow = "",
      colors = [],
      changeColor = () => {},
    } = this.props;
    return (
      <div className="mb-5">
        <h5 className="mb-3">{shoePartName}</h5>
        <div className="d-flex align-items-center justify-content-center">
          {colors.map((item) => {
            return (
              <Button
                variant="outline-secondary"
                size="sm"
                className="ml-2"
                onClick={() => changeColor(stateName, item.value)}
                active={stateNow === item.value}
              >
                {item.label}
              </Button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorButtons;
