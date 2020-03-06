import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "../../App.css";

class OrderItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="order-item">
        <Button variant="contained" color="primary">
          {this.props.orderItem.name}
        </Button>
        <Button variant="contained" color="primary">
          -
        </Button>
        <Button variant="contained" color="primary">
          {this.props.orderItem.quantity}
        </Button>
        <Button variant="contained" color="primary" onClick={this.increment}>
          +
        </Button>
        <Button variant="contained" color="primary">
          {this.props.orderItem.price * this.props.orderItem.quantity}
        </Button>
      </div>
    );
  }
}

OrderItem.propTypes = {};

export default OrderItem;
