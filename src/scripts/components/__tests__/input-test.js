jest.unmock('../input');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../input';

describe('Input', () => {
  const changeStyleMock = jest.fn();
  const props = {
    challengeText: 'challengeText',
    rows: 2,
    changeStyle: changeStyleMock,
    l10n: {
      inputDescription: 'input description'
    }
  };

  const input = TestUtils.renderIntoDocument(
    <Input {...props} />
  );

  const textArea = TestUtils.findRenderedDOMComponentWithTag(input, 'textarea');
  const inputNode = ReactDOM.findDOMNode(input);

  it('is initially empty', () => {
    expect(textArea.textContent).toBe('');
  });

  it('notifies listeners on change', () => {
    TestUtils.Simulate.change(textArea);
    expect(changeStyleMock).toBeCalled();
  });

  it('should have a challenge text', () => {
    expect(inputNode.textContent).toContain('challengeText');
  });

  it('should have a input description', () => {
    expect(inputNode.textContent).toContain('input description');
  })
});
