import React from "react";
import { Navbar } from "react-bootstrap";

class TopBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">👟 Custom Order</Navbar.Brand>
      </Navbar>
    );
  }
}

export default TopBar;
