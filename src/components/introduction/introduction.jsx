import React, { Component } from "react";
import "./introduction.css";
import Avatar from "material-ui/Avatar";

class IntroductionComponent extends Component {
  render() {
    return (
      <div className="introduction">
        <Avatar src="avatar.jpg" size={150} />
        <p className="introduction-text">
          Loves Javascript, python, gaming and anime. <br />
          Full Stack Developer, currently living in Kathmandu, Nepal.
        </p>
      </div>
    );
  }
}

export default IntroductionComponent;
