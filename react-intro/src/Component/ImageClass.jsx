import { Component } from "react";
class ImageClass extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}
export default ImageClass;
