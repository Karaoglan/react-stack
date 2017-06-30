import React from 'react';
import MessageList from './MessageList.jsx';
import mui from 'material-ui';
import PropTypes from 'prop-types';
import {blue500} from 'material-ui/styles/colors';
import {blue700} from 'material-ui/styles/colors';
import {blue100} from 'material-ui/styles/colors';
import {pink400} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: blue100,
    accent1Color: pink400
  },
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

class App extends React.Component {
  constructor(props) {
   super(props);
   injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="Awesome Chat App" />
      </MuiThemeProvider>
    );
  }
}

export default App;
