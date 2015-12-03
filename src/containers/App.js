import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as WordListActions from '../actions/WordListActions';

import WordList from '../components/WordList';
import NewWordForm from '../components/NewWordForm';
import ResetButtons from '../components/ResetButtons';

import { wordListSelector } from '../selectors/wordListSelector.js';

class App extends Component {
  render() {
    return (
      <div className="Layout">
        <h1>Solver</h1>
        <WordList />
        <NewWordForm {...bindActionCreators(WordListActions, this.props.dispatch)} />
        <ResetButtons {...bindActionCreators(WordListActions, this.props.dispatch)} />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(wordListSelector)(App);
