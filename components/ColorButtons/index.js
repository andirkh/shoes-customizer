import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  COLOR_DEFAULT_WHITE,
  COLOR_DEFAULT_BLACK,
} from "../../utilities/constants";

class ColorButtons extends React.Component {
  render() {
    const {
      shoePartName = "",
      stateName = "",
      stateNow = "",
      colors = [],
      changeColor = () => {},
    } = this.props;
    console.log("stateNow", stateNow);
    return (
      <Card className="mb-3 py-3 px-4">
        <h5 className="mb-4">
          {stateNow === COLOR_DEFAULT_BLACK || stateNow === COLOR_DEFAULT_WHITE
            ? ""
            : "✅"}
          <span className="ml-2">{shoePartName}</span>
        </h5>
        <div className="d-flex align-items-center">
          {colors.map((item) => {
            return (
              <Button
                variant="outline-secondary"
                size="sm"
                className="ml-2"
                onClick={() => changeColor(stateName, item.value)}
                active={stateNow === item.value}
              >
                <span
                  style={{
                    height: 15,
                    width: 15,
                    backgroundColor: item.value,
                    borderRadius: "50%",
                    display: "inline-block",
                    border: "1px solid #b1b1b1",
                  }}
                />
                <br />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
      </Card>
    );
  }
}

export default ColorButtons;
