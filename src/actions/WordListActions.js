import { ADD_WORD, DEL_WORD, ADD_CONSTRAINT, RESET_CONSTRAINTS } from '../constants/ActionTypes';

export function addWord(word) {
  return {
    type: ADD_WORD,
    word: word,
  };
}

export function delWord(word) {
  return {
    type: DEL_WORD,
    word: word,
  };
}

export function addConstraint(word, matches) {
  return {
    type: ADD_CONSTRAINT,
    word: word,
    matches: matches,
  };
}

export function resetConstraints() {
  return {
    type: RESET_CONSTRAINTS,
  };
}
