import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as WordListActions from '../../actions/WordListActions';
import { wordListSelector } from '../../selectors/wordListSelector.js';


import './WordList.scss';

class WordList extends Component {

  constructor() {
    super();
  }
  _delWord(word){
    this.props.dispatch(WordListActions.delWord(word));
  }

  _clickConstraint(word, likeness){
    this.props.dispatch(WordListActions.addConstraint(word, likeness));
  }

  render() {
    return (
      <table className='WordList'>
        <thead>
          <tr>
            <th>Word</th>
            <th>Avg</th>
            <th>Dud</th>
            {this.props.possibleMatchValues.map((val) => (
              <th key={val}>{val}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            this.props.words.map(function(word) {
              return(
                <tr className="word" key={word} >
                  <td>
                    "{word}"
                  </td>
                  <td>
                    {this.props.averageLikeness.get(word).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={()=>this._delWord(word)}>Dud</button>
                  </td>
                  {this.props.possibleMatchValues.map((val) => (
                    <th key={val}>{this.props.possibleLikeness.get(word).has(val) ? (
                      <button onClick={()=>this._clickConstraint(word,val)}>{val}</button>
                    ) : " "}</th>
                  ))}
                </tr>
              )
            }.bind(this))
          }
        </tbody>
      </table>
    );
  }
}


export default connect(wordListSelector)(WordList);
