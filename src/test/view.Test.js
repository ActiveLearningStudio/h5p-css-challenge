/**
 * Created by thoma_000 on 03.04.2016.
 */
import 'expose?H5P!exports?H5P!h5p-view';
import View from '../scripts/view';

var params = require('../content/test1.json');

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

var wrapper = document.createElement('div');
document.body.appendChild(wrapper);

describe('View', function () {

  describe('Async DOM', function () {
    view.appendTo(wrapper);

    it('should append to wrapper', function () {
      var viewContainer = wrapper
        .getElementsByClassName('h5p-css-challenge-view-container')[0];
      expect(viewContainer.parentNode).toBe(wrapper);
    });
  });

  describe('Set target style', function () {

    var targetElement = wrapper
      .getElementsByClassName('h5p-css-challenge-target')[0];
    var goalElement = wrapper
      .getElementsByClassName('h5p-css-challenge-goal')[0];

    it('should keep original style with invalid update value', function () {
      view.setTargetStyle('asdf');
      expect(targetElement.style.cssText.indexOf(existingRulesString) !== -1)
        .toBe(true);
    });

    it('should update its style with valid update value', function () {
      var validStyleString = 'margin: auto;';
      view.setTargetStyle(validStyleString);
      expect(targetElement.style.cssText.indexOf(validStyleString) !== -1)
        .toBe(true);
    });

    it('should have the same style as goal with correct input value', function () {
      view.setTargetStyle(answerRulesString);
      expect(targetElement.style.cssText.indexOf(goalElement.style.cssText) !== -1)
        .toBe(true);
    });
  });
});
