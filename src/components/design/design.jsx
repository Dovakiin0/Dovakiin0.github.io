import React, { Component } from "react";
import Checkbox from "material-ui/Checkbox";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";
import "./design.css";
import { Card, CardHeader, CardActions, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class DesignComponent extends Component {
  render() {
    return (
      <div className="design">
        <p className="headline">User Experience and Other Development</p>
        <p className="text-justify">
          Beside web and software Developing, I like to make Games and have
          great interest in making one. Some technologies I use to make games.
        </p>

        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ fill: "#A80202" }}
            label="Unity"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ fill: "#A80202" }}
            label="Adobe Photoshop"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ fill: "#A80202" }}
            label="Blender"
          />
        </div>
        <div className="design-checkbox">
          <Checkbox
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            iconStyle={{ fill: "#A80202" }}
            label="C#"
          />
        </div>
        <div className="code-github">
          <p className="headline">Test one of my games</p>
          <Card>
            <CardHeader
              subtitle="Download on mega.nz"
              title="Arcade"
              avatar="mega.png"
            />
            <CardText>
              This is an 3D Arcade coin collecting game. Though just a demo,
              Look forward to my further games.
            </CardText>
            <CardActions>
              <FlatButton
                label="View"
                href="https://mega.nz/folder/lkgjSabB#O7fqASVQqyKrjJD9aFExNg"
                target="_blank"
              />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default DesignComponent;
