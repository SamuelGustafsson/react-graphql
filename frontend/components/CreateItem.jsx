import React, { Component } from "react";
import { Mutation } from "react-apollo";
import From from "./styles/Form";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";
import Form from "./styles/Form";
import ErrorMessage from "./ErrorMessage";
import Router from "next/router";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    image: "",
    largeImage: ""
  };

  handleChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;

    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    console.log("Uploading file....");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sickfits");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/annexenbygg/image/upload",
      { method: "POST", body: data }
    );

    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
    console.log("IMAGE", file);
  };

  render() {
    return (
      <div>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { loading, error }) => (
            <Form
              onSubmit={async e => {
                //   Stop the form from submitting
                e.preventDefault();
                // call the mutation
                const result = await createItem();
                // Send user to item detailpage
                Router.push({
                  pathname: "/item",
                  query: { id: result.data.createItem.id }
                });
              }}
            >
              <ErrorMessage error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                  Image
                  <input
                    type="file"
                    name="file"
                    id="file"
                    placeholder="Uplad an image"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.image && (
                    <img
                      src={this.state.image}
                      alt="Upload Preview"
                      width="200"
                    />
                  )}
                </label>

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
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
