/**
 * Created by thoma_000 on 03.04.2016.
 */

import 'expose?H5P!exports?H5P!h5p-view';
import Input from '../scripts/input';
var params = require('../content/test1.json');

var input = new Input(params.answerRules.length, params.challengeText, params.l10n);
var wrapper = document.createElement('div');
document.body.appendChild(wrapper);

describe('Input', function () {

  describe('Async DOM', function () {
    beforeEach(function (){

    }, 500);

    it('should attach to body', function () {
      input.appendTo(wrapper);
      var inputContainer = wrapper
        .getElementsByClassName('h5p-css-challenge-input-container')[0];
      expect(inputContainer.parentNode).toBe(wrapper);
    });
  });

  describe('Async event', function () {
    var listenerEvent;
    var testString = 'test: string;';

    it('should trigger inputChanged with input value', function () {
      input.on('inputChanged', function (e) {
        listenerEvent = e;
        expect(listenerEvent.data).toBe(testString);
      });

      var inputElement = wrapper
        .getElementsByClassName('h5p-css-challenge-input')[0];
      inputElement.textContent = testString;

      var e = new Event('keyup');
      inputElement.dispatchEvent(e);
    });
  });
});
