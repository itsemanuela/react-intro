import { Component } from "react";

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button className="mybutton">{this.props.nuovobottone}</button>
      </div>
    );
  }
}

export default ButtonComponent;
