import React from 'react'
import { animated, Spring } from "react-spring/renderprops.cjs";

class TitleAnimated extends React.Component {
  render () {
    const { title } = this.props;
    return (
      <Spring
        native
        delay={1000}
        from={{ transform: "translate3d(0px,-50px,0)", opacity: 0 }}
        to={{ transform: "translate3d(0,0px,0px)", opacity: 1 }}
      >
        {(props) => (
          <animated.h2 style={props} className="ml-3 text-dark py-2">
            {title}
          </animated.h2>
        )}
      </Spring>
    )
  }
}

export default TitleAnimated;
