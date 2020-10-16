import React from "react";
import { Button, Card } from "react-bootstrap";
import {
  COLOR_DEFAULT_WHITE,
  COLOR_DEFAULT_BLACK,
} from "../../utilities/constants";

class ColorButtons extends React.Component {
  state = {
    isMore: false,
  };

  handleIsMore = () => {
    this.setState({ isMore: true });
  };

  render() {
    const {
      shoePartName = "",
      stateName = "",
      stateNow = "",
      colors = [],
      changeColor = () => {},
      hideViewMore = false,
    } = this.props;
    const isSelected = !(
      stateNow === COLOR_DEFAULT_BLACK || stateNow === COLOR_DEFAULT_WHITE
    );

    const colorsToIterate =
      this.state.isMore || hideViewMore ? colors : colors.slice(0, 6);
    const isShowMoreButton = colorsToIterate.length < colors.length;

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
          <div className="mb-3">
            {colorsToIterate.map((item) => {
              return (
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="ml-2 mb-2"
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
          {isShowMoreButton && (
            <div className="d-flex justify-content-center">
              <Button
                variant="light"
                size="sm"
                onClick={() => this.handleIsMore()}
              >
                View More
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default ColorButtons;
