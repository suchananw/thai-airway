import React, { Component } from "react";
import mapReport from "./mapReport";

export default class FormTimeSelect extends Component {
  render() {
    const name = this.props.name;
    const label = mapReport[name];
    const TIME = [];
    for (let i = 0; i < 10; i++) {
      TIME.push(`0${i}00`);
      TIME.push(`0${i}30`);
    }
    for (let i = 10; i <= 23; i++) {
      TIME.push(`${i}00`);
      TIME.push(`${i}30`);
    }

    let span = "3";
    if (this.props.span) {
      span = this.props.span;
    }

    let dropdown = TIME.map(time => {
      return (
        <option className="text-uppercase" value={time} key={time}>
          {time}
        </option>
      );
    });

    return (
      <div className={`form-group col-md-${span} text-left`}>
        <label className="text-uppercase">{label}</label>
        <select
          className="custom-select"
          name={name}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <option>-- --</option>
          {dropdown}
        </select>
      </div>
    );
  }
}
