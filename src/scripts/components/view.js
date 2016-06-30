import React from "react";

export default class View extends React.Component {

  constructor(props) {
    super();
    this.goalStyle =
      this.formatStyleString(props.existingRulesString + props.answerRulesString);
  }

  formatStyleString(styleString) {
    let numOfStyles = styleString.split(';');
    let formatted = {};
    numOfStyles.forEach((e) => {
      let [key, object] = e.split(':');
      if (key && object) {
        formatted[key.trim()] = object.trim();
      }
    });
    return formatted;
  }

  render() {
    return (
      <div className="h5p-css-challenge-view-container">
        <div className="h5p-css-challenge-goal-container">
          <div style={this.goalStyle} className="h5p-css-challenge-goal"></div>
        </div>
        <div className="h5p-css-challenge-target-container">
          <div className="h5p-css-challenge-target"
            style={this.formatStyleString(this.props.existingRulesString + this.props.userString)}
          ></div>
        </div>
      </div>
    );
  }
}
