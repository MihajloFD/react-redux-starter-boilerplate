import { HOME } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
  case HOME:
    return { ...state, home: action.payload };
  default:
    return state;
  }
}
