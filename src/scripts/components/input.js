import React from "react";

export default class Input extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="h5p-css-challenge-input-container">
        <div className="h5p-css-challenge-description">{this.props.challengeText}</div>
        <div className="h5p-css-challenge-input-description">{this.props.l10n.inputDescription}</div>
        <textarea className="h5p-css-challenge-input" rows={this.props.rows}
                  onChange={this.props.changeStyle}
        />
      </div>
    );
  }
}
