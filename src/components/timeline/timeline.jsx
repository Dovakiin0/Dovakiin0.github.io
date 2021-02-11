import React, { Component } from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import Chip from "material-ui/Chip";
import "./timeline.css";

class TimelineComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
    };
  }

  async componentDidMount() {}

  componentWillUnmount() {}

  handleExpandChange = (expanded1) => {
    this.setState({ expanded1: expanded1 });
  };

  handleExpandChange2 = (expanded2) => {
    this.setState({ expanded2: expanded2 });
  };

  handleExpandChange3 = (expanded3) => {
    this.setState({ expanded3: expanded3 });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleExpand2 = () => {
    this.setState({ expanded2: true });
  };

  handleExpand3 = () => {
    this.setState({ expanded3: true });
  };

  handleReduce = () => {
    this.setState({ expanded1: false });
  };

  handleReduce2 = () => {
    this.setState({ expanded2: false });
  };

  handleReduce3 = () => {
    this.setState({ expanded3: false });
  };
  render() {
    return (
      <div className="timeline">
        <p className="headline">Working experience</p>
        <div className="timeline-entry">
          <Card>
            <CardHeader title="Full Stack Developer" subtitle="PERN" />
            {/* <CardText expandable={true}>
              October 2016 - October 2017. Development of Microservices,
              UX-Consulting.
              <br />
              <br />
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>Angular 2</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Docker</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Jenkins</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>LESS</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Java Spring</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Foundation, Bootstrap</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Confluence, JIRA</Chip>
                </div>
              </div>
            </CardText> */}
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded1}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title="Web Developer"
              // subtitle="Testo	SE	&	Co.	KGaA"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              June 2020 - Ongoing. Development of Project Plus at <br />
              <b>
                <i>SilverBack Tech</i>
              </b>
              .
              <br />
              <br />
              <div className="timeline-entries">
                <div className="timeline-entry-chip">
                  <Chip>Javascript</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Node.js</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>React.js</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Express</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>PostgreSQL</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>Docker</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>gRPC</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>RabbitMq</Chip>
                </div>
                <div className="timeline-entry-chip">
                  <Chip>MongoDB</Chip>
                </div>
              </div>
            </CardText>
          </Card>
        </div>
        <div className="timeline-entry">
          <Card
            expanded={this.state.expanded2}
            onExpandChange={this.handleExpandChange2}
          >
            <CardHeader
              title="Student"
              subtitle="Kantipur City College"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Ongoing Bachelors of Computer Application (BCA)
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default TimelineComponent;
