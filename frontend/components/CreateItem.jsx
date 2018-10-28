import React, { Component } from "react";
import { Mutation } from "react-apollo";
import From from "./styles/Form";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";
import Form from "./styles/Form";

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: 0
  };

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("SEND STATE", this.state);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="title">
              Title
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="description">
              Price
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
                value={this.state.price}
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor="price">
              Description
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                required
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default CreateItem;
