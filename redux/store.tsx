import { createStore, combineReducers } from 'redux';
import { MakeStore, createWrapper, HYDRATE, Context } from 'next-redux-wrapper';
// reducers
import { eventReducer } from './reducers/eventReducer';

const reducer = combineReducers({
  eventState: eventReducer,
});

interface InitialState {
  events: [];
}

// store
const makeStore: MakeStore<InitialState> = (context: Context) =>
  createStore(reducer);

export const wrapper = createWrapper<InitialState>(makeStore, { debug: true });
