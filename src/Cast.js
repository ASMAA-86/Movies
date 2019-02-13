import React, { Component } from "react";

class Cast extends Component {
  render() {
    const crewData = this.props.crewData;
    return (
      <div>
        <p />
        {crewData.name}
        <p />
        <p>{crewData.role}</p>
      </div>
    );
  }
}
export default Cast;
