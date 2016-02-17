/*global H5P*/
H5P.CssChallenge = (function ($) {
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

    // View of css elements
    var viewContainer = document.createElement('div');
    viewContainer.className = 'h5p-css-challenge-view-container';

    // Goal element with all correct styles applied
    var goalContainer = document.createElement('div');
    goalContainer.className = 'h5p-css-challenge-goal-container';
    viewContainer.appendChild(goalContainer);

    // Target element that will be styled to match goal
    var targetContainer = document.createElement('div');
    targetContainer.className = 'h5p-css-challenge-target-container';
    viewContainer.appendChild(targetContainer);

    // Goal element with all correct styles applied
    var goalElement = document.createElement('div');
    goalElement.className = 'h5p-css-challenge-goal';
    goalContainer.appendChild(goalElement);

    // Target element that will be styled to match goal
    var targetElement = document.createElement('div');
    targetElement.className = 'h5p-css-challenge-target';
    targetContainer.appendChild(targetElement);

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

    // Set styles on elements
    goalElement.setAttribute('style', existingRulesString + answerRulesString);
    targetElement.setAttribute('style', existingRulesString);

    // Input field for user
    var inputContainer = document.createElement('div');
    inputContainer.className = 'h5p-css-challenge-input-container';

    // Create input field
    var input = document.createElement('textarea');
    input.className = 'h5p-css-challenge-input';
    input.onkeyup = function () {
      targetElement.setAttribute('style', existingRulesString + input.value);
    };
    inputContainer.appendChild(input);

    this.attach = function ($wrapper) {
      $wrapper[0].appendChild(inputContainer);
      $wrapper[0].appendChild(viewContainer);
    };
  }

  return CssChallenge;
}(H5P.jQuery));