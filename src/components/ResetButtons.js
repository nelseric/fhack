import React, {Component} from 'react';

class ResetButtons extends Component {
  _resetAll() {
    this.props.resetConstraints();
    this.props.resetWords();
  }
  render() {
    return (
      <div className="ResetButtons">
        <button onClick={this.props.resetConstraints}>Reset Constraints</button>
        <button onClick={this._resetAll.bind(this)}>Reset All</button>
      </div>
    );
  }
}

ResetButtons.propTypes = {
  resetConstraints: React.PropTypes.func.isRequired,
  resetWords: React.PropTypes.func.isRequired,
};

export default ResetButtons;
