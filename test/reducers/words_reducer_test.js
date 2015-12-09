import { expect } from 'chai';
import words from '../../src/reducers/words';

import {Set} from 'immutable';

import * as types from '../../src/constants/ActionTypes';

describe('Words Reducer', ()=>{
  describe('Initial State', ()=>{
    it('is an empty Set', ()=>{
      expect(words(undefined, {})).to.eql(Set());
    });
  });
  describe('Add a word.', ()=>{
    it('Adds the word to the set');
  });
  describe('Delete a word', ()=>{
    it('Removes the word from the set');
  });
  describe('Delete all words', ()=>{
    it('Empties the set');
  });
});
