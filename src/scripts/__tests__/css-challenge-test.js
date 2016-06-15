jest.unmock('../css-challenge');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CssChallenge from '../css-challenge';

// Mocks
import Layout from '../components/layout';

describe('Css-Challenge', () => {
  const params = {
    existingRules: [
      'background:green;',
      'margin:auto;'
    ],
    answerRules: [
      {
        mainRule: 'border-radius:1em;'
      }
    ],
    l10n: {

    },
    challengeText: ''
  };

  const cssChallenge = new CssChallenge(params);
  const body = TestUtils.renderIntoDocument(<div></div>);
  const bodyElement = {
    get: jest.fn().mockReturnValue(body)
  };

  cssChallenge.attach(bodyElement);

  it('should create a layout', () => {
    expect(Layout).toBeCalled();
  });

  it('should reduce existing rules', () => {
    expect(Layout.mock.calls[0][0].existingRulesString)
      .toBe('background:green;margin:auto;');
  });

  it('should reduce answer rules', () => {
    expect(Layout.mock.calls[0][0].answerRulesString)
      .toBe('border-radius:1em;');
  });
});
