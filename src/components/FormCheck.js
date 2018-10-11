import React, { Component } from 'react';

export default class FormCheck extends Component {
  render() {
    const label = this.props.label;
    const id = this.props.id;
    let span = "3";
    if (this.props.span) {
      span = this.props.span
    }
    
    return (
      <div class={`form-group row col-md-${span} text-left`}>
        <div class="col-sm-6">
          <label class="text-uppercase">{label}</label>
        </div>
        <div class="form-check radio-inline col-sm-3">
          <input type="radio" id={`${id}_yes`} name={id} class="form-check-input"/>
          <label class="form-check-label">YES</label>
        </div>
        <div class="form-check radio-inline">
          <input type="radio" id={`${id}_no`} name={id} class="form-check-input"/>
          <label class="form-check-label">NO</label>
        </div>
      </div>
    );
  }
}