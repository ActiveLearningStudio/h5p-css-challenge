jest.unmock('../view');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import View from '../view';

describe('View', () => {
  const props = {
    existingRulesString: 'background:green;',
    answerRulesString: 'margin:auto;',
    userString: ''
  };

  const view = TestUtils
    .renderIntoDocument(
      <View {...props} />
    );

  const containers = TestUtils.scryRenderedDOMComponentsWithTag(view, 'div');


  describe('Goal', () => {

    const goalContainer = containers[4];

    it('should be created', () => {
      expect(goalContainer).toBeDefined();
    });

    it('should get the existing style', () => {
      expect(goalContainer.style.background).toBe('green');
    });

    it('should get the goal style', () => {
      expect(goalContainer.style.margin).toBe('auto');
    });
  });

  describe('Target', () => {
    const targetContainer = containers[2];

    it('should be created', () => {
      expect(targetContainer).toBeDefined();
    });

    it('should get the existing style', () => {
      expect(targetContainer.style.background).toBe('green');
    });

    it('should not get the goal style', () => {
      expect(targetContainer.style.margin).not.toBe('auto');
    });

    it('should update to valid user string', () => {
      let newProps = props;
      newProps.userString = 'margin:auto;';
      const changedView = TestUtils
        .renderIntoDocument(
          <View {...newProps} />
        );
      const changedContainers = TestUtils.scryRenderedDOMComponentsWithTag(changedView, 'div');
      const changedTarget = changedContainers[2];
      expect(changedTarget.style.margin).toBe('auto');
    });

    it('should not update to an invalid string', () => {
      let invalidProps = props;
      invalidProps.userString = 'margin:green;';
      const changedView = TestUtils
        .renderIntoDocument(
          <View {...invalidProps} />
        );
      const changedContainers = TestUtils.scryRenderedDOMComponentsWithTag(changedView, 'div');
      const changedTarget = changedContainers[2];
      expect(changedTarget.style.margin).not.toBe('green');
    })
  });
});
