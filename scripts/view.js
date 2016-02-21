H5P.CssChallenge = H5P.CssChallenge || {};
H5P.CssChallenge.View = (function () {
  "use strict";

  function View(existingRulesString, answerRulesString) {
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

    // Set styles on elements
    goalElement.setAttribute('style', existingRulesString + answerRulesString);
    targetElement.setAttribute('style', existingRulesString);

    /**
     * Add given style to existing styles for target element.
     *
     * @param {string} style Style as string
     * @returns {View}
     */
    this.setTargetStyle = function (style) {
      targetElement.setAttribute('style', existingRulesString + style);

      return this;
    };

    /**
     * Append view to given element.
     *
     * @param {HTMLElement} wrapperElement
     *    Wrapper element that view will be appended to
     * @returns {View}
     */
    this.appendTo = function (wrapperElement) {
      wrapperElement.appendChild(viewContainer);

      return this;
    };
  }

  return View;
}());