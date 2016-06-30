import React from "react";

import * as styles from './styles/view.css';

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
      <div className={this.props.style}>
        <div className={styles.targetContainer}>
          <div className={styles.target}
               style={this.formatStyleString(this.props.existingRulesString + this.props.userString)}
          ></div>
        </div>
        <div className={styles.goalContainer}>
          <div style={this.goalStyle} className={styles.goal}></div>
        </div>
      </div>
    );
  }
}
