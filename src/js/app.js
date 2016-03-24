import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Alexandre' };
  }
  
  titleOnClick(event) {
    const name = this.state.name + 1;
    this.setState({
      name
    });
  }
 
  render() {
    return (
      <h1 onClick={this.titleOnClick.bind(this)}>Welcome, {this.state.name}.</h1>
    );
  };
}

const appElement = document.querySelector('#app');

ReactDOM.render(<Layout/>, appElement);