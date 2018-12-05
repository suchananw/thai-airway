import React, { Component } from "react";
import mapReport from "./mapReport";

export default class FormSelect extends Component {
  render() {
    const name = this.props.name;
    const label = mapReport[name];
    const choices = this.props.choices;
    let span = "3";
    if (this.props.span) {
      span = this.props.span;
    }

    let dropdown = choices.map(choice => {
      return (
        <option value={choice} key={choice}>
          {choice}
        </option>
      );
    });

    return (
      <div className={`form-group col-md-${span} text-left`}>
        <label className="text-uppercase">{label}</label>
        <select
          name={name}
          className="custom-select text-uppercase"
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <option>--</option>
          {dropdown}
        </select>
      </div>
    );
  }
}
