import React, { Component } from 'react';

export default class FormText extends Component {
  render() {
    const label = this.props.label;
    let span = "3";
    if (this.props.span) {
      span = this.props.span
    }
    
    return (
      <div class={`form-group col-md-${span} mb-3`}>
        <label>{label}</label>
        <input type="text" class="form-control mx-3" />
      </div>
    );
  }
}