import { expect } from 'chai';
import * as actions from '../../src/actions/WordListActions';
import * as types from '../../src/constants/ActionTypes';

describe('WordListActions', ()=>{
  describe('addWord', () => {
    it('creates an action that adds a word', () => {
      const word = 'triangulate';
      const expectedAction = {
        type: types.ADD_WORD,
        word,
      };
      expect(actions.addWord(word)).to.eql(expectedAction);
    });
  });

  describe('delWord', () => {
    it('creates an action that removes a word', () => {
      const word = 'triangulate';
      const expectedAction = {
        type: types.DEL_WORD,
        word,
      };
      expect(actions.delWord(word)).to.eql(expectedAction);
    });
  });

  describe('addConstraint', () =>{
    it('creates an action that adds a constraint', ()=>{
      const word = 'triangulate';
      const matches = 3;
      const expectedAction = {
        type: types.ADD_CONSTRAINT,
        word, matches,
      };
      expect(actions.addConstraint(word, matches)).to.eql(expectedAction);
    });
  });

  describe('resetWords', ()=>{
    it('creates an action that deletes all words', ()=>{
      const expectedAction = {
        type: types.RESET_WORDS,
      };
      expect(actions.resetWords()).to.eql(expectedAction);
    });
  });

  describe('resetConstraints', ()=>{
    it('creates an action that deletes all constraints', ()=>{
      const expectedAction = {
        type: types.RESET_CONSTRAINTS,
      };
      expect(actions.resetConstraints()).to.eql(expectedAction);
    });
  });
});
