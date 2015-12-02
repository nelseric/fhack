
import { combineReducers } from 'redux';

import words from './words';
import constraints from './constraints';

const rootReducer = combineReducers({
  words,
  constraints,
});

export default rootReducer;
