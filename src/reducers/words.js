import { ADD_WORD, DEL_WORD, RESET_WORDS } from '../constants/ActionTypes';

import { Set } from 'immutable';

export default function words(state = Set(), action) {
  switch (action.type) {
  case ADD_WORD:
    return state.add(action.word);
  case DEL_WORD:
    return state.delete(action.word);
  case RESET_WORDS:
    return state.clear();
  default:
    return state;
  }
}
