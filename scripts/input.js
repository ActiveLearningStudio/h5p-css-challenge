H5P.CssChallenge = H5P.CssChallenge || {};
H5P.CssChallenge.Input = (function (EventDispatcher) {
  "use strict";

  function Input() {
    EventDispatcher.call(this);

    var self = this;

    // Input field for user
    var inputContainer = document.createElement('div');
    inputContainer.className = 'h5p-css-challenge-input-container';

    // Create input field
    var input = document.createElement('textarea');
    input.className = 'h5p-css-challenge-input';
    input.onkeyup = function () {
      self.trigger('inputChanged', input.value);
    };
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