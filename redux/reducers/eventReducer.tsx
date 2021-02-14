import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';
import { EVENT } from '../types';

interface EventState {
  events: {
    id: string;
    title: string;
  }[];
}

export const eventReducer = (state: EventState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case EVENT:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
