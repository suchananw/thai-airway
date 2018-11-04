import React, { Component } from "react";
import mapChecklist from "./mapChecklist";

export default class FormCheck extends Component {
  render() {
    const name = this.props.name;
    const label = mapChecklist[name];
    let span = "3";
    if (this.props.span) {
      span = this.props.span;
    }

    return (
      <div class={`form-group form-check col-md-${span} text-left mx-3`}>
        <input
          class="form-check-input"
          type="checkbox"
          name={name}
          onChange={this.props.onChange}
          {this.props.checked? {Checked}: null}
        />
        <label class="form-check-label">{label}</label>
      </div>
    );
  }
}
