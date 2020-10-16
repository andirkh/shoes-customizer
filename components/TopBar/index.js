import React from "react";
import { Navbar } from "react-bootstrap";

class TopBar extends React.Component {
  render() {
    const { clientName = '' } = this.props;
    return (
      <Navbar bg="dark" variant="dark" className="d-flex justify-content-between align-items-center py-3">
        <Navbar.Brand>
          {`Custom Order Sheet`}
        </Navbar.Brand>
        <span className="text-white">{`${clientName ? `by:  ${clientName} ` : '🗒'}`}</span>
      </Navbar>
    );
  }
}

export default TopBar;
