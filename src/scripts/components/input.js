import React from "react";
import * as styles from "./styles/input.css";

export default class Input extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={this.props.style}>
        <div className={styles.question}>{this.props.challengeText}</div>
        <div className={styles.description}>{this.props.l10n.inputDescription}</div>
        <div className={styles.brackets}>{this.props.l10n.targetElementClass} &#123;</div>
        <textarea className={styles.input}
                  rows={this.props.rows}
                  onChange={this.props.changeStyle}
        />
        <div>&#125;</div>
      </div>
    );
  }
}
