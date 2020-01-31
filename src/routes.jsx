import React from "react";
import Layout from "./hoc/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home";

class MainRouter extends React.PureComponent {
  state = {
    changeLayout: false
  };

  handleEventOnChangeLayout = () => {
    this.setState({ changeLayout: true });
  };

  handleEventOffChangeLayout = () => {
    this.setState({ changeLayout: false });
  };

  render() {
    return (
      <Layout
        changeLayout={this.state.changeLayout}
        handleEventOnChangeLayout={this.handleEventOnChangeLayout}
        handleEventOffChangeLayout={this.handleEventOffChangeLayout}
      >
        <Switch>
          <Route
            path={"/"}
            render={props => (
              <Home {...props} changeLayout={this.state.changeLayout} />
            )}
          />
        </Switch>
      </Layout>
    );
  }
}

export default MainRouter;
