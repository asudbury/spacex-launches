import React from 'react';
import { render } from '@testing-library/react';
import LaunchRocket from './launchRocket';
import rocketTestData from '../testData/rocketTestData';

test('Launch Rocket', () => {
  const { container, getByTestId } = render(
    <LaunchRocket rocket={rocketTestData} />
  );

  const launchLinks = getByTestId('launchRocket');

  /// data test id
  expect(launchLinks).toBeInTheDocument();

  /// labels
  expect(container).toHaveTextContent('Rocket Name');
  expect(container).toHaveTextContent('Rocket Type');
  expect(container).toHaveTextContent('Manufacturer');
  expect(container).toHaveTextContent('Serial Number');

  /// data
  expect(container).toHaveTextContent('Falcon 1');
  expect(container).toHaveTextContent('Merlin A');
  expect(container).toHaveTextContent('SSTL');
  expect(container).toHaveTextContent('Merlin1A');
});
