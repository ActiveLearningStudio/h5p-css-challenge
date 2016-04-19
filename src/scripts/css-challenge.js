/*global H5P*/

// Import scripts
import View from './view';
import Input from './input';
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
    // Apply helpers to target and goal
    var existingRulesString = '';
    params.existingRules = params.existingRules || [];
    params.existingRules.forEach(function (existingRule) {
      existingRulesString += existingRule;
    });

    // Apply correct rules to goal
    var answerRulesString = '';
    params.answerRules.forEach(function (answerRule) {
      answerRulesString += answerRule.mainRule;
    });

    var view = new View(existingRulesString, answerRulesString);
    var input = new Input(params.answerRules.length, params.challengeText, params.l10n);
    input.on('inputChanged', function (e) {
      view.setTargetStyle(e.data);
    });

    /**
     * Required function H5P uses to attach library to wrapper.
     *
     * @param {jQuery} $wrapper
     */
    this.attach = function ($wrapper) {
      input.appendTo($wrapper[0]);
      view.appendTo($wrapper[0]);

      return this;
    };
  }
}
