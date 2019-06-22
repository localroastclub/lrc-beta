import React, { Component } from 'react';
import './index.css';

import Layout from './containers/Layout';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    overflow: 'hidden'
  },
});


class App extends Component {

  render() {
    return (
        <Layout {...this.props} />
    );
  }
}

export default App;
