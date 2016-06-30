jest.unmock('../layout');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Layout from '../layout';

//Mocks
import View from '../view';
import Input from '../input';

describe('Layout', () => {
  const props = {
    answerRules: [
      'answerRule1',
      'answerRule2'
    ],
    challengeText: 'challengeText',
    l10n: {
      inputDescription: 'input description'
    },
    existingRulesString: 'margin:auto;',
    answerRulesString: 'background:green;'
  };

  const layout = TestUtils.renderIntoDocument(
    <Layout {...props} />
  );

  it('should create a view component', () => {
    expect(View).toBeCalled();
  });
  
  it('should create a input component', () => {
    expect(Input).toBeCalled();
  });
  
  it('should start with an empty user string', () => {
    expect(layout.state.userString).toBe('');
  });
  
  it('should set a new state on changeStyle', () => {
    const event = {
      target: {
        value: 'new:style;'
      }
    };
    layout.changeStyle(event);
    expect(layout.state.userString).toBe('new:style;');
  });
});
