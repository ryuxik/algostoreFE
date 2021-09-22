import "./style/CallToAction.css";
import React from "react";
import { Link } from "react-router-dom";

const CallToAction = (props) => {
  const { link, message, order } = props;
  const orderStyle = {
    order: order,
  };

  return (
    <Link to={link} style={orderStyle}>
      <dic className="call-to-action">
        <div className="call-to-action-message">{message}</div>
      </dic>
    </Link>
  );
};

export default CallToAction;
