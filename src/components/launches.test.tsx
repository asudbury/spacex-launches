import React from 'react';
import ReactRouter from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import Launches from './launches';
import launchesTestData from '../testData/launchesTestData';

test('Launch', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  const initialState = {
    spaceXApi: {
      queries: {
        'getLaunches("")': {
          status: 'fulfilled',
          endpointName: 'getLaunches',
          requestId: '9CsdcrS3ZHiWro4rXE0WT',
          originalArgs: '',
          startedTimeStamp: 1631720394141,
          data: launchesTestData,
          mutations: {},
          provided: {},
          subscriptions: {
            'getLaunches("")': {
              '9CsdcrS3ZHiWro4rXE0WT': {
                pollingInterval: 0
              }
            }
          }
        }
      },
      config: {
        online: true,
        focused: true,
        middlewareRegistered: true,
        refetchOnFocus: false,
        refetchOnReconnect: false,
        refetchOnMountOrArgChange: false,
        keepUnusedDataFor: 60,
        reducerPath: 'spaceXApi'
      }
    }
  };

  const store = mockStore(initialState);

  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ launchId: '60' });

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
