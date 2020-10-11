import React from "react";
import PropTypes from "prop-types";

class TestSVG extends React.Component {
  render() {
    const { eclipseColor, rectangleColor } = this.props;
    return (
      <svg
        width="50%"
        height="50%"
        viewBox="0 0 1024 768"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLineJoin="round"
        strokeMiterLimit="2"
      >
        <ellipse
          id="myEclipseId"
          cx="454.241"
          cy="411.095"
          rx="207.949"
          ry="204.382"
          fill={eclipseColor}
        />
        <rect
          id="myRectangleId"
          x="375.242"
          y="157.004"
          width="355.779"
          height="290.409"
          fill={rectangleColor}
        />
      </svg>
    );
  }
}

export default TestSVG;
