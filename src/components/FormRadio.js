import React, { Component } from "react";
import mapReport from "./mapReport";

export default class FormCheck extends Component {
  render() {
    const name = this.props.name;
    const label = mapReport[name];
    let span = "3";
    if (this.props.span) {
      span = this.props.span;
    }

    return (
      <div className={`form-group row col-md-${span} text-left`}>
        <div className="col-sm-6">
          <label className="text-uppercase">{label}</label>
        </div>
        <div className="form-check radio-inline col-sm-3">
          <input
            type="radio"
            id={`${name}_yes`}
            name={name}
            value="yes"
            className="form-check-input"
            onChange={this.props.onChange}
            checked={this.props.checked === "yes"}
          />
          <label className="form-check-label">YES</label>
        </div>
        <div className="form-check radio-inline">
          <input
            type="radio"
            id={`${name}_no`}
            name={name}
            value="no"
            className="form-check-input"
            onChange={this.props.onChange}
            checked={this.props.checked === "no"}
          />
          <label className="form-check-label">NO</label>
        </div>
      </div>
    );
  }
}
