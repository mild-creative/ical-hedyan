import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Main from './pages/main';
import PenerimaTamu from './pages/penerima-tamu-form';
import Attendees from './pages/attendees';
import RSVP from './pages/rsvp-list';

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Open Sans', sans-serif`
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
          <Route
            exact
            path="/penerima-tamu"
            component={PenerimaTamu}
          />
          <Route
            exact
            path="/attendees"
            component={Attendees}
          />
          <Route
            exact
            path="/rsvp"
            component={RSVP}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
