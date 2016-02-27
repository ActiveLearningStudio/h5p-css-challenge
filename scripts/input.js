H5P.CssChallenge = H5P.CssChallenge || {};
H5P.CssChallenge.Input = (function (EventDispatcher) {
  "use strict";

  /**
   *
   * @param {string} challengeText
   * @param {Object} l10n
   * @param {string} l10n.inputDescription
   * @constructor
   */
  function Input(inputRows, challengeText, l10n) {
    EventDispatcher.call(this);

    // Challenge description
    var challengeDescription = document.createElement('div');
    challengeDescription.className = 'h5p-css-challenge-description';
    challengeDescription.textContent = challengeText;

    // Input description
    var inputDescription = document.createElement('div');
    inputDescription.className = 'h5p-css-challenge-input-description';
    inputDescription.textContent = l10n.inputDescription;

    // Input field for user
    var inputContainer = document.createElement('div');
    inputContainer.className = 'h5p-css-challenge-input-container';

    // Pre input field css
    var preInput = document.createElement('div');
    preInput.className = 'h5p-css-challenge-pre-input';

    // Create input field
    var input = document.createElement('textarea');
    input.rows = inputRows;
    input.className = 'h5p-css-challenge-input';
    input.onkeyup = function () {
      this.trigger('inputChanged', input.value);
    }.bind(this);

    // Post input field css
    var postInput = document.createElement('div');
    postInput.className = 'h5p-css-challenge-post-input';

    // Append elements
    inputContainer.appendChild(challengeDescription);
    inputContainer.appendChild(inputDescription);
    inputContainer.appendChild(input);

    /**
     * Append input to wrapper element.
     *
     * @param {HTMLElement} wrapperElement
     * @returns {H5P.CssChallenge.Input}
     */
    this.appendTo = function (wrapperElement) {
      wrapperElement.appendChild(inputContainer);

      return this;
    };
  }

  Input.prototype = Object.create(EventDispatcher.prototype);
  Input.prototype.constructor = Input;

  return Input;

}(H5P.EventDispatcher));
