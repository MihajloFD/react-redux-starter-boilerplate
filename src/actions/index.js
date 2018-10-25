import { HOME } from './types';

export function homeFunction () {
  return function (dispatch) {
    dispatch({ type: HOME, payload: 'HOME props' });
  };
}
