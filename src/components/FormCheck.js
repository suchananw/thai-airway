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
        <div class="custom-control custom-radio custom-control-inline col-sm-3">
          <input type="radio" id="radioInline1" name="radioInline1" class="custom-control-input"/>
          <label class="custom-control-label">YES</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input type="radio" id="radioInline2" name="radioInline1" class="custom-control-input"/>
          <label class="custom-control-label">NO</label>
        </div>
      </div>
    );
  }
}