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

  expect(launch).toBeInTheDocument();

  expect(container).toHaveTextContent('Flight');
  expect(container).toHaveTextContent('Mission');
  expect(container).toHaveTextContent('Launch Date');
  expect(container).toHaveTextContent('Details');
});
