/*global H5P*/

/**
 * Exports the Input class
 */
export default class Input extends H5P.EventDispatcher {

  /**
   *
   * @param {number} inputRows
   * @param {string} challengeText
   * @param {Object} l10n
   * @param {string} l10n.inputDescription
   * @constructor
   */
  constructor(inputRows, challengeText, l10n) {
    super();

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
     * @returns {Input}
     */
    this.appendTo = function (wrapperElement) {
      wrapperElement.appendChild(inputContainer);

      return this;
    };
  }
}
