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

const filteredWordSelector = createSelector(
  constraintsSelector,
  wordDistancesSelector,
  function filterWords(constraints, wordDistances) {
    let filteredWords = wordDistances.keySeq().toSet();
    constraints.forEach(function applyConstraint(val, word) {
      filteredWords = filteredWords.intersect(wordDistances.get(word).filter((matchVal) => matchVal === val).keySeq().toSet());
    });
    return filteredWords;
  }
);

const filteredWordDistanceSelector = createSelector(
  filteredWordSelector,
  wordDistancesSelector,
  function select(filteredWords, wordDistances) {
    return wordDistances.filter(
      (_, word) => filteredWords.has(word)
    ).map(
      (val) => val.filter(
        (_, word) => filteredWords.has(word)
      )
    );
  }
);

const possibleLikenessSelector = createSelector(
  filteredWordDistanceSelector,
  function select(wordDistances) {
    const possibleLikeness = wordDistances.map((val) => val.toSet());

    return possibleLikeness;
  }
);

const possibleMatchValuesSelector = createSelector(
  possibleLikenessSelector,
  (possibleLikeness) => !possibleLikeness.isEmpty() ? possibleLikeness.toSet().reduce((a, b) => a.merge(b)).sort() : possibleLikeness
);

const averageLikenessSelector = createSelector(
  wordDistancesSelector,
  function select(wordDistances) {
    const averageLikeness = wordDistances.map(
      function avg(distances) {
        let totalLikeness = 0.0;
        if (distances.count() > 0) {
          totalLikeness = distances.toList().reduce(
            (total, other) => total + other
          ) / distances.count();
        }
        return totalLikeness;
      }
    );
    return averageLikeness;
  }
);

export const wordListSelector = createSelector(
  wordsSelector,
  constraintsSelector,
  wordDistancesSelector,
  possibleLikenessSelector,
  possibleMatchValuesSelector,
  averageLikenessSelector,
  filteredWordSelector,
  (
    words, constraints, wordDistances,
    possibleLikeness, possibleMatchValues,
    averageLikeness, filteredWords
  ) => (
    {
      words: filteredWords.sortBy((word)=>0 - averageLikeness.get(word)), constraints, wordDistances,
      possibleLikeness, possibleMatchValues,
      averageLikeness, allWords: words,
    }
  )
);
