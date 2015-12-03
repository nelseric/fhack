import React, { Component } from 'react';

class NewWordForm extends Component {
  constructor() {
    super();
    this.state = { newWord: '' };
    this._handleNewWordChange = this._handleNewWordChange.bind(this);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
    this.props.addWord(this.state.newWord);
    this.setState({ newWord: '' });
  }

  _handleNewWordChange(evt) {
    this.setState({ newWord: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this._handleFormSubmit}>
        <input value={this.state.newWord} onChange={this._handleNewWordChange} />
        <button type="submit">Add Word</button>
      </form>
    );
  }
}

NewWordForm.propTypes = {
  addWord: React.PropTypes.func.isRequired,
};

export default NewWordForm;
