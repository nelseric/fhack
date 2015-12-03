import React, {Component} from 'react';

class ResetButtons extends Component {
  render() {
    return (
      <button onClick={this.props.resetConstraints}>Reset Constraints</button>
    );
  }
}

ResetButtons.propTypes = {
  resetConstraints: React.PropTypes.func.isRequired,
};

export default ResetButtons;
