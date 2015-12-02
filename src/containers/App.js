import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as WordListActions from '../actions/WordListActions';

import WordList from '../components/WordList';
import NewWordForm from '../components/NewWordForm';

import { wordListSelector } from '../selectors/wordListSelector.js';

class App extends Component {
  render() {
    return (
      <div className="Layout">
        <h1>Solver</h1>
        <WordList />
        <NewWordForm {...bindActionCreators(WordListActions, this.props.dispatch)} />
      </div>
    );
  }
}

export default connect(wordListSelector)(App);
