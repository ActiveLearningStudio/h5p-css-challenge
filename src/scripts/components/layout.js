import React from "react";

import Input from "./input";
import View from "./view";

export default class Layout extends React.Component {

  constructor(params) {
    super();

    this.inputParams = {
      rows: params.answerRules.length,
      challengeText: params.challengeText,
      l10n: params.l10n,
      changeStyle: this.changeStyle.bind(this)
    };

    this.state = {
      userString: ''
    };
  }

  changeStyle(e) {
    let styleString = e.target.value;
    this.setState({userString: styleString});
  }

  render() {
    return (
      <div>
        <Input {...this.inputParams}/>
        <View
          existingRulesString={this.props.existingRulesString}
          answerRulesString={this.props.answerRulesString}
          userString={this.state.userString}
        />
      </div>
    );
  }
}
