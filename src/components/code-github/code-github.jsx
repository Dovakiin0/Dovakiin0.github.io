import React, { Component } from "react";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

import "./code-github.css";

class CodeGithubComponent extends Component {
  render() {
    return (
      <div className="code-github">
        <p className="headline">Check Out my GitHub Projects</p>
        <Card>
          <CardHeader
            subtitle="Github Repository"
            title="dovakiin0"
            avatar="github.png"
          />
          <CardText>
            Basic Microservice architecture for ToDo application, with saga
            patterns.
          </CardText>
          <CardActions>
            <FlatButton label="View on github" href="" target="_blank" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CodeGithubComponent;
