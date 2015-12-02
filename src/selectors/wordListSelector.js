import { createSelector } from 'reselect';
// import _ from 'lodash';

import {Map} from 'immutable';

const wordsSelector = (state) => state.words;
const constraintsSelector = (state) => state.constraints;

function wordLikeness(word, otherWord) {
  let likeness = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index] === otherWord[index]) {
      likeness++;
    }
  }
  return likeness;
}

const wordDistancesSelector = createSelector(
  wordsSelector,
  function select(words) {
    let wordDistances = Map();
    words.forEach(function eachWord(word) {
      let distances = Map();
      words.delete(word).forEach(function getDistance(otherWord) {
        distances = distances.set(otherWord, wordLikeness(word, otherWord));
      });
      wordDistances = wordDistances.set(word, distances);
    });
    return wordDistances;
  }
);

const possibleLikenessSelector = createSelector(
  wordDistancesSelector,
  function select(wordDistances) {
    const possibleLikeness = wordDistances.map((val) => val.toSet());

    return possibleLikeness;
  }
);

export const wordListSelector = createSelector(
  wordsSelector,
  constraintsSelector,
  wordDistancesSelector,
  possibleLikenessSelector,
  (words, constraints, wordDistances, possibleLikeness) => (
    {words, constraints, wordDistances, possibleLikeness}
  )
);
