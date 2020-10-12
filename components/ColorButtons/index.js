import React from "react";
import { Button, Card } from "react-bootstrap";

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
      <Card className="mb-3 py-3 px-4">
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
      </Card>
    );
  }
}

export default ColorButtons;
