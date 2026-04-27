import { Component } from "react";

class Lista extends Component {
  render() {
    return (
      <div>
        <ul className="lista1">
          <li>Acqua</li>
          <li>Caffe</li>
          <li>Aranciata</li>
          <li>Gassosa</li>
          <li>{this.props.item}</li>
        </ul>
      </div>
    );
  }
}

export default Lista;
