import React, {Component} from 'react';
import {connect} from 'react-redux';

class UndoButtons extends Component {
  render() {
    return (
      <div className="undoButtons">
      <button disabled={!this.props.undoEnabled} onClick={this.props.undo}>Undo </button>
      <button disabled={!this.props.redoEnabled} onClick={this.props.redo}>Redo </button>
      </div>
    );
  }
}

UndoButtons.propTypes = {
  undo: React.PropTypes.func.isRequired,
  redo: React.PropTypes.func.isRequired,
  undoEnabled: React.PropTypes.bool.isRequired,
  redoEnabled: React.PropTypes.bool.isRequired,
};

function select(state) {
  return {
    undoEnabled: state.past.length > 0,
    redoEnabled: state.future.length > 0,
  };
}

export default connect(select)(UndoButtons);
