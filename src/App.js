import React, { Component } from "react";
import "./App.css";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MainRouter from "./routes";

// const theme = createMuiTheme();

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        {/* <MuiThemeProvider theme={theme}> */}
        <MainRouter />
        {/* </MuiThemeProvider> */}
      </Router>
    );
  }
}

export default App;
