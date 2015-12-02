import { ADD_CONSTRAINT, RESET_CONSTRAINTS } from '../constants/ActionTypes';

import { Map } from 'immutable';

export default function constraints(state = Map(), action) {
  switch (action.type) {
  case ADD_CONSTRAINT:
    return state.set(action.word, action.matches);
  case RESET_CONSTRAINTS:
    return state.clear();
  default:
    return state;
  }
}
