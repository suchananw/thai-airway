import React, { Component } from "react";
import mapReport from "./mapReport";

export default class FormText extends Component {
  render() {
    const name = this.props.name;
    const label = mapReport[name];

    let span = "3";
    if (this.props.span) {
      span = this.props.span;
    }

    return (
      <div className={`form-group col-md-${span} text-left`}>
        <label className="text-uppercase">{label}</label>
        {this.props.disabled ? (
          <input
            name={name}
            type="text"
            className="form-control"
            value="-"
            disabled
          />
        ) : (
            <input
              name={name}
              type="text"
              className="form-control"
              value={this.props.value}
              onChange={this.props.onChange}
            />
          )}
      </div>
    );
  }
}
