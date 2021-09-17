import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import launchesTestData from './launchesTestData';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const config = {
  online: true,
  focused: true,
  middlewareRegistered: true,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  refetchOnMountOrArgChange: false,
  keepUnusedDataFor: 60,
  reducerPath: 'spaceXApi'
};

export function getMockStore(): any {
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
      config: config
    }
  };

  return mockStore(initialState);
}

export function getLoadingMockStore(): any {
  const initialState = {
    spaceXApi: {
      queries: {
        'getLaunches("")': {
          status: 'pending',
          endpointName: 'getLaunches',
          requestId: '9CsdcrS3ZHiWro4rXE0WT',
          originalArgs: '',
          startedTimeStamp: 1631720394141,
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
      config: config
    }
  };

  return mockStore(initialState);
}

export function getErrorMockStore(): any {
  const initialState = {
    spaceXApi: {
      queries: {
        'getLaunches("")': {
          status: 'error',
          endpointName: 'getLaunches',
          requestId: '9CsdcrS3ZHiWro4rXE0WT',
          originalArgs: '',
          startedTimeStamp: 1631720394141,
          error: {
            status: 'PARSING_ERROR',
            originalStatus: 404,
            data: 'Not Found',
            error: 'SyntaxError: Unexpected token N in JSON at position 0'
          },
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
      config: config
    }
  };

  return mockStore(initialState);
}
