import { Component } from "react";

class Paragrafo extends Component {
  render() {
    return (
      <div>
        <p className={this.props.colorep}>{this.props.testo}</p>
      </div>
    );
  }
}

export default Paragrafo;
