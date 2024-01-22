import React, { Component } from "react";

export class LinkButton extends Component {
  render() {
    const link = this.props.link;
    return (
      <div
        key={this.props._id}
        className="flex flex-row border rounded text-gray-400 p-2 mr-2 hover:bg-neutral-950 hover:text-white border-gray-600"
      >
        <div className="mr-2">{this.props.icon}</div>
        <a className=" text-sm font-base" href= {link}>
          {this.props.text}
        </a>
      </div>
    );
  }
}
