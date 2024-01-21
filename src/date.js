import React, { Component } from "react";

export class TheDate extends Component {
  render() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const theDate = currentDate.getDate();
    const month = currentDate.getUTCMonth();
    return (
      <div className="flex flex-row-reverse w-full text-gray-500 font-medium italic">
        {year}-{theDate}-{month + 1}
      </div>
    );
  }
}
