import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
      // Dont maniplulate state directly, instead return
      // a brand new state array with the old data and
      // the new data added on.

      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // ES6 syntax -> [City, City, City]
    default:

  }

  return state;
}
