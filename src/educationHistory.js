import React, { Component } from "react";

export class Edu extends Component {
  render() {
    const { year, institution, description } = this.props;
    console.log(year)
    return (
      <div className="w-full bg-neutral-950 min-h-32 rounded p-5 mb-5 border border-gray-600">
        <div className="flex flex-row justify-between">
          <div className="text-white font-semibold">{institution}</div>
          <div className="font-light text-gray-400 text-sm">{year}</div>
        </div>
        <div className="text-gray-400 text-sm font-medium mt-3">{description}</div>
      </div>
    );
  }
}
