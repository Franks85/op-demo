import React, { Component, Fragment } from "react";
import { Tooltip, Alert } from "reactstrap";
import propTypes from "prop-types";

class AlerTip extends Component {
  state = {};
  toggle = targetName => {
    if (!this.state[targetName]) {
      this.setState({
        ...this.state,
        [targetName]: {
          tooltipOpen: true
        }
      });
    } else {
      this.setState({
        ...this.state,
        [targetName]: {
          tooltipOpen: !this.state[targetName].tooltipOpen
        }
      });
    }
  };

  isToolTipOpen = targetName => {
    return this.state[targetName] ? this.state[targetName].tooltipOpen : false;
  };

  render() {
    const { tipText, placement, target, alertText, alertColor } = this.props;
    return (
      <Fragment>
        <Alert color={alertColor} id={`${target}`}>
          {alertText}
        </Alert>
        <Tooltip
          placement={placement}
          isOpen={this.isToolTipOpen(`${target}`)}
          target={`${target}`}
          toggle={() => this.toggle(`${target}`)}
        >
          {tipText}
        </Tooltip>
      </Fragment>
    );
  }
}

AlerTip.propTypes = {
    placement: propTypes.string,
    tipText: propTypes.string,
    target: propTypes.string,
    alertText: propTypes.string,
    alertColor: propTypes.string
};

export default AlerTip;
