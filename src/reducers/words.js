import { ADD_WORD, DEL_WORD } from '../constants/ActionTypes';

import { Set } from 'immutable';

export default function words(state = Set(), action) {
  switch (action.type) {
  case ADD_WORD:
    return state.add(action.word);
  case DEL_WORD:
    return state.delete(action.word);
  default:
    return state;
  }
}
