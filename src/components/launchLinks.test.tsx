import React from 'react';
import { render } from '@testing-library/react';
import LaunchLinks from './launchLinks';
import linksTestData from '../testData/linksTestData';

test('Launch Links', () => {
  const { container, getByTestId } = render(
    <LaunchLinks links={linksTestData} />
  );

  const launchLinks = getByTestId('launchLinks');

  /// data test id
  expect(launchLinks).toBeInTheDocument();

  /// labels
  expect(container).toHaveTextContent('Article');
  expect(container).toHaveTextContent('Wikipedia');
  expect(container).toHaveTextContent('Video');

  /// data
  expect(container).toHaveTextContent(
    'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html'
  );
  expect(container).toHaveTextContent('https://en.wikipedia.org/wiki/DemoSat');
  expect(container).toHaveTextContent(
    'https://www.youtube.com/watch?v=0a_00nJ_Y88'
  );
});
