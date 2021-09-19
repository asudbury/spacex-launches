import React from 'react';
import ReactRouter from 'react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Launch from './launch';
import { getMockStore } from '../testData/helper';

test('Launch', () => {
  const store = getMockStore();

  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ launchId: '60' });

  const { container, getByTestId } = render(
    <Provider store={store}>
      <Launch />
    </Provider>
  );

  const launch = getByTestId('launch');

  /// data test id
  expect(launch).toBeInTheDocument();

  /// tabs
  expect(container).toHaveTextContent('Mission');
  expect(container).toHaveTextContent('Rocket');
  expect(container).toHaveTextContent('Links');
  expect(container).toHaveTextContent('Json');

  /// labels
  expect(container).toHaveTextContent('Flight Number');
  expect(container).toHaveTextContent('Mission Name');
  expect(container).toHaveTextContent('Launch Date');
  expect(container).toHaveTextContent('Launch Site');

  // data
  expect(container).toHaveTextContent('TESS');
  expect(container).toHaveTextContent('18-Apr-2018 23:51:00');
  expect(container).toHaveTextContent(
    'Cape Canaveral Air Force Station Space Launch Complex 40'
  );
  expect(container).toHaveTextContent('Part of the Explorers program');
});
