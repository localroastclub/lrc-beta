import React, { Component } from 'react';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Layout from './containers/Layout';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Content from './components/Content';

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
