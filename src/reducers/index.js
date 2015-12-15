
import { combineReducers } from 'redux';

import undoable from 'redux-undo';

import words from './words';
import constraints from './constraints';

const rootReducer = combineReducers({
  words,
  constraints,
});

export default undoable(rootReducer);
