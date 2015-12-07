import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

/* eslint-disable react/prop-types */
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
