import React from "react";
import { Button } from "react-bootstrap";
import { animated, Trail } from "react-spring/renderprops.cjs";

import { SHOES_SIZE } from "../../utilities/constants";

class ShoesSizeButton extends React.Component {
  render() {
    const { shoesSize = "", changeSize = () => {} } = this.props;

    return (
      <Trail
        items={SHOES_SIZE}
        keys={(item) => item.SIZE}
        from={{ transform: "translate3d(400px, 0,0)" }}
        to={{ transform: "translate3d(0,0px,0)" }}
      >
        {(item) => (props) => (
          <animated.div style={props}>
            <Button
              variant="outline-secondary"
              size="sm"
              className="mr-2 px-3 mb-2"
              active={item.size === shoesSize}
              disabled={!item.available}
              onClick={() => changeSize(item.size)}
            >
              {item.size}
            </Button>
          </animated.div>
        )}
      </Trail>
    );
  }
}

export default ShoesSizeButton;
