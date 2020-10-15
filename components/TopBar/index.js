import React from "react";
import { Navbar } from "react-bootstrap";

class TopBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">THE 368 - 📝 Custom Order Sheet</Navbar.Brand>
        <span>⚡️</span>
      </Navbar>
    );
  }
}

export default TopBar;
