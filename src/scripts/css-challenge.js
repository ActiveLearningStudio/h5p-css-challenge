/*global H5P*/

// Import scripts
import React from "react";
import ReactDOM from "react-dom";

import Layout from './components/layout';
/**
 * @type AnswerRule
 * @property {string}   AnswerRule.mainRule
 * @property {string[]} [AnswerRule.alternatives]
 */

export default class CssChallenge {

  /**
   *
   * @param {Object}        params
   * @param {string}        params.challengeText
   * @param {Array}         params.existingRules
   * @param {AnswerRule[]}  params.answerRules
   * @param {Object}        params.l10n
   * @constructor
   */
  constructor(params) {

    let existingRulesString = params.existingRules
      .reduce((prev, value) => prev + value);

    let answerRulesString = params.answerRules
      .reduce((prev, value) => prev + value.mainRule, '');

    let layoutParams = Object.assign({
      existingRulesString,
      answerRulesString
    }, params);

    /**
     * Required function H5P uses to attach library to wrapper.
     *
     * @param {jQuery} $wrapper
     */
    this.attach = function ($wrapper) {
      ReactDOM.render(<Layout {...layoutParams}/>, $wrapper.get(0));
    };
  }
}
