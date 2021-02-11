import React, { Component } from "react";
import "./footer.css";
import FlatButton from "material-ui/FlatButton";
const scrollTo = require("scroll-to");

class FooterComponent extends Component {
  onScrollToTop() {
    scrollTo(0, 0, {
      ease: "out-bounce",
      duration: 2000,
    });
  }

  render() {
    return (
      <div className="footer">
        <span className="support">Connect with me here</span>
        <div className="link-list">
          <a target="_blank" href="https://github.com/Dovakiin0">
            Github
          </a>
          /
          <a target="_blank" href="https://twitter.com/dovakiin0">
            Twitter
          </a>
          /
          <a target="_blank" href="https://www.facebook.com/Dovakiin0">
            Facebook
          </a>
          /
          <a target="_blank" href="https://www.instagram.com/dovakiin0._">
            Instagram
          </a>
          /
          <a
            target="_blank"
            href="https://www.linkedin.com/in/bishal-subedi-282842118/"
          >
            LinkedIn
          </a>
        </div>
        <FlatButton
          labelStyle={{
            color: "rgba(0, 0, 0, 0.65)",
          }}
          label="Back to top"
          onClick={this.onScrollToTop}
        />
      </div>
    );
  }
}

export default FooterComponent;
