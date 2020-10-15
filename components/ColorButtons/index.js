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
    const isSelected = !(
      stateNow === COLOR_DEFAULT_BLACK || stateNow === COLOR_DEFAULT_WHITE
    );
    return (
      <Card className="mb-3">
        <Card.Header>
          <div className="d-flex align-items-center justify-content-between">
            <h5>
              {isSelected && "✅"}
              <span className="ml-2">{shoePartName}</span>
            </h5>
            {isSelected && (
              <span
                onClick={() => changeColor(stateName, COLOR_DEFAULT_WHITE)}
                className="cursor-pointer text-muted"
              >
                reset
              </span>
            )}
          </div>
        </Card.Header>
        <Card.Body>
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
        </Card.Body>
      </Card>
    );
  }
}

export default ColorButtons;
