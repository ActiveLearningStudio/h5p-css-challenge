/*global H5P*/
H5P.CssChallenge = (function (Input, View) {
  "use strict";

  /**
   *
   * @param params
   * @param params.existingRules
   * @param params.answerRules
   * @param params.answerRules.mainRule
   * @constructor
   */
  function CssChallenge(params) {

    // Apply helpers to target and goal
    var existingRulesString = '';
    params.existingRules.forEach(function (existingRule) {
      existingRulesString += existingRule;
    });

    // Apply correct rules to goal
    var answerRulesString = '';
    params.answerRules.forEach(function (answerRule) {
      answerRulesString += answerRule.mainRule;
    });

    var view = new View(existingRulesString, answerRulesString);
    var input = new Input();
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
    };
  }

  return CssChallenge;
}(
    H5P.CssChallenge.Input,
    H5P.CssChallenge.View
));