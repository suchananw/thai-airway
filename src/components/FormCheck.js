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
      <div class={`form-group form-check col-md-${span} text-left mx-3`}>
        <input class="form-check-input" type="checkbox" value="" id={id}/>
        <label class="form-check-label">
          {label}
        </label>
      </div>
    );
  }
}