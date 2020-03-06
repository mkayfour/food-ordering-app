import React from "react";
import PropTypes from "prop-types";
import OrderItem from "./OrderItem";
import Button from "@material-ui/core/Button";

class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderItemCount: 2,
      orders: [
        { id: 1, name: "Pizza", quantity: 1, price: 40 },
        { id: 2, name: "Burger", quantity: 1, price: 20 }
      ]
    };
  }

  render() {
    return (
      <div className="order-component">
        <h1>Order From Here !</h1>
        {this.state.orderItemCount > 0 &&
          this.state.orders.map(item => (
            <div>
              {" "}
              <OrderItem orderItem={item} />
              <Button
                variant="contained"
                color="primary"
                onClick={this.increment}
              >
                +
              </Button>
            </div>
          ))}
      </div>
    );
  }
}

Order.propTypes = {};

export default Order;
