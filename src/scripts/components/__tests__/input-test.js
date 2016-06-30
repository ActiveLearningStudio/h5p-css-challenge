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

  const description = TestUtils
    .findRenderedDOMComponentWithClass(input, 'question');

  const inputDescription = TestUtils
    .findRenderedDOMComponentWithClass(input, 'description');

  const textArea = TestUtils
    .findRenderedDOMComponentWithClass(input, 'input');

  it('is initially empty', () => {
    expect(textArea.textContent).toBe('');
  });

  it('notifies listeners on change', () => {
    TestUtils.Simulate.change(textArea);
    expect(changeStyleMock).toBeCalled();
  });

  it('should have a challenge text', () => {
    expect(description.textContent).toBe('challengeText');
  });

  it('should have a input description', () => {
    expect(inputDescription.textContent).toBe('input description');
  })
});
