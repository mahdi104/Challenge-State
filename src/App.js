import React, { Component } from "react";
import AddList from "./AddList/AddList";

import ListItem from "./ListItem/ListItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: Math.random(), item: "task1" },
        { id: Math.random(), item: "task2" },
      ],
    };
  }
  handleItem = (item) => {
    // items.push(item);
    // this.setState({ items: this.state.items.concat(item) });
    if (item) {
      this.setState({
        items: [...this.state.items, { id: Math.random(), item: item }],
      });
    }
  };
  handleDelete = (id) => {
    this.setState({ items: this.state.items.filter((el) => el.id != id) });
  };
  render() {
    return (
      <div className="App">
        <AddList handleItem={this.handleItem} />
        <ListItem
          handleDelete={this.handleDelete}
          listitems={this.state.items}
        />
      </div>
    );
  }
}
