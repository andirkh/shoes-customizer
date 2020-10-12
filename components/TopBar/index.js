import React from "react";
import { Navbar } from "react-bootstrap";

class TopBar extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand>Shoe Configurator</Navbar.Brand>
      </Navbar>
    );
  }
}

export default TopBar;
