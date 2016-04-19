/**
 * Created by thoma_000 on 21.03.2016.
 */

/*global H5P*/
import 'expose?H5P!exports?H5P!h5p-view';
import CssChallenge from '../scripts/css-challenge';
var params = require('../content/test1.json');

describe('Css challenge', function () {
  var cssChallenge = new CssChallenge(params);
  var $testWrapper =  H5P.jQuery('<div/>');
  var testWrapper = $testWrapper.get(0);
  document.body.appendChild(testWrapper);

  describe('Async DOM', function () {
    cssChallenge.attach($testWrapper);
    var inputParent = testWrapper
      .getElementsByClassName('h5p-css-challenge-input-container')[0].parentNode;
    var viewParent = testWrapper
      .getElementsByClassName('h5p-css-challenge-view-container')[0].parentNode;

    it('should attach to document body', function () {
      expect(inputParent).toBe(testWrapper);
      expect(viewParent).toBe(testWrapper);
    });
  });

  describe('Events', function () {
    it('should be sent from input to view', function () {
      var inputField = testWrapper
        .getElementsByClassName('h5p-css-challenge-input')[0];
      var targetElement = testWrapper
        .getElementsByClassName('h5p-css-challenge-target')[0];
      var testString = 'test';
      inputField.textContent = testString;

      var e = new Event('keyup');
      inputField.dispatchEvent(e);
      expect(targetElement.getAttribute('style')).toContain(testString);
    });
  });
});
