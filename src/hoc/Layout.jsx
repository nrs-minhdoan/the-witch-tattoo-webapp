import React from "react";
import PropTypes from "prop-types";
import { withStyles, AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Layout.css";

const styles = theme => ({
  appBar: {
    background: "#1a1a1a",
    color: "#cf8f2a"
  },
  toolbar: {
    justifyContent: "center"
  },
  typography: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    marginRight: "5vw",
    fontFamily: "Pacifico",
    cursor: "pointer",
    width: "10vw",
    textAlign: "center"
  }
});

class Layout extends React.PureComponent {
  render() {
    const {
      classes,
      changeLayout,
      handleEventOnChangeLayout,
      handleEventOffChangeLayout
    } = this.props;
    return (
      <React.Fragment>
        <AppBar
          className={classes.appBar}
          style={{ backgroundColor: changeLayout ? "#fff" : "#1a1a1a" }}
        >
          <Toolbar className={classes.toolbar}>
            <div>
              <Typography
                className={classes.typography}
                style={{ color: changeLayout ? "#000" : "#cf8f2a" }}
                onClick={handleEventOffChangeLayout}
              >
                WITCH TATTOO
              </Typography>
              <Typography
                className={classes.typography}
                style={{ color: changeLayout ? "#fd79a8" : "#fff" }}
                onClick={handleEventOnChangeLayout}
              >
                YIN NAILS
              </Typography>
            </div>
            <ul className={"navbar"}>
              <li
                className={changeLayout ? "item-navbar-other" : "item-navbar"}
              >
                HOME
              </li>
              <li
                className={changeLayout ? "item-navbar-other" : "item-navbar"}
              >
                ABOUT US
              </li>
              <li
                className={changeLayout ? "item-navbar-other" : "item-navbar"}
              >
                GALLERY
              </li>
              <li
                className={changeLayout ? "item-navbar-other" : "item-navbar"}
              >
                AFTERCARE
              </li>
              <li
                className={changeLayout ? "item-navbar-other" : "item-navbar"}
              >
                CONTACT US
              </li>
            </ul>
            <div
              className={"phone-number"}
              style={{ color: changeLayout ? "#fd79a8" : "#cf8f2a" }}
            >
              {changeLayout ? "(+84) 983757009" : "(+84) 971958818"}
            </div>
          </Toolbar>
        </AppBar>
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
