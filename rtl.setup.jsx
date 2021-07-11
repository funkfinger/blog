/* eslint-disable import/no-extraneous-dependencies */
// See https://github.com/kentcdodds/react-testing-library#global-config
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
  fireEvent,
  waitFor,
  waitForElement,
} from '@testing-library/react';

global.render = render;
global.fireEvent = fireEvent;
global.waitForElement = waitForElement;
global.waitFor = waitFor;

// export * from '@testing-library/jest-dom/extend-expect';
