import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Launches from './launches';
import store from '../testData/mockStore';

test('Launches', () => {
  const { container, getByTestId } = render(
    <Provider store={store}>
      <Launches />
    </Provider>
  );

  const launch = getByTestId('launches');

  /// data test id
  expect(launch).toBeInTheDocument();

  /// table headings
  expect(container).toHaveTextContent('Flight');
  expect(container).toHaveTextContent('Mission');
  expect(container).toHaveTextContent('Launch Date');
  expect(container).toHaveTextContent('Details');

  /// data
  expect(container).toHaveTextContent('TESS');
  expect(container).toHaveTextContent('18-Apr-2018 23:51:00');
  expect(container).toHaveTextContent('Part of the Explorers program');
});
