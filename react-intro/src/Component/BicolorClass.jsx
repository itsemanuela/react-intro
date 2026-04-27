import { Component } from "react";
class BicolorClass extends Component {
  render() {
    return (
      <div>
        <button className={this.props.colore1}> {this.props.nuovotesto}</button>
      </div>
    );
  }
}
export default BicolorClass;
