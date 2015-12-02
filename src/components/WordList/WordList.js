import React, { Component } from 'react';
import './WordList.scss';
// import Actions from '../../lib/Actions';
// import WordStore from '../../lib/WordStore';

class WordList extends Component {

  constructor() {
    super();
  }

  render() {
    const self = this;
    return (
      <table className='WordList'>
        <thead>
          <tr>
            <th>Word</th>
            <th>Dud</th>
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
                    <button onClick={()=>this.props.delWord(word)}>Dud</button>
                  </td>
                  <td>
                    {this.props.possibleLikeness.get(word).toString()}
                  </td>
                </tr>
              )
            }.bind(this))
          }
        </tbody>
      </table>
    );
  }
}


export default WordList;
