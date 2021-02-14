import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = { tick: 'init' }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'TICK':
      return { ...state, tick: action.payload };
    case 'EVENTS':
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

const initialState = {};

const makeStore = () =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
export const wrapper = createWrapper(makeStore, { debug: true });
