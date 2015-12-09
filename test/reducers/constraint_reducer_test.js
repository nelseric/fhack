import { expect } from 'chai';
import constraints from '../../src/reducers/constraints';

import {Map} from 'immutable';

import * as types from '../../src/constants/ActionTypes';


describe('Constraints Reducer', ()=>{
  describe('Initial State', ()=>{
    it('is an empty Map', ()=>{
      expect(constraints(undefined, {})).to.eql(Map());
    });
  });
  describe('Adding a Constraint', ()=>{
    it('adds the word to the map, with its match value', () => {
      const word = 'eyeglass';
      const matches = 3;
      const expectedState = Map().set(word, matches);
      expect(
        constraints(
          undefined,
          {
            type: types.ADD_CONSTRAINT,
            word,
            matches,
          }
        )
      ).to.eql(expectedState);
    });
  }); // Adding a Constraint
  describe('reset all constraints', ()=>{
    it('always returns an empty map', ()=>{
      const initialState = Map().set('foo', 2);
      const action = {
        type: types.RESET_CONSTRAINTS,
      };
      expect(
        constraints(undefined, action)
      ).to.eql(Map());
      expect(
        constraints(initialState, action)
      ).to.eql(Map());
    });
  });
});
