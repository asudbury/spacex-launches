import React from 'react';
import ReactRouter from 'react-router';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Launch from './launch';
import store from '../testData/mockStore';

test('Launch', () => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ launchId: '60' });

  const { container, getByTestId } = render(
    <Provider store={store}>
      <Launch />
    </Provider>
  );

  const launch = getByTestId('launch');

  expect(launch).toBeInTheDocument();

  expect(container).toHaveTextContent('Mission');
  expect(container).toHaveTextContent('Rocket');
  expect(container).toHaveTextContent('Links');
  expect(container).toHaveTextContent('Json');
});
