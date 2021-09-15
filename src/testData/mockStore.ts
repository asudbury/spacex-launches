import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import launchesTestData from './launchesTestData';

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

export { store as default };
