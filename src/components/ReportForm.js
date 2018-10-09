import React, { Component } from 'react';
import FormText from './FormText'

export default class ReportForm extends Component {
  render () {
    return (
        <div class="container mt-3">
          <form>
            <div class="form-row">
              <FormText label="FORM"/>
              <FormText label="GROUP"/>
              <FormText label="ROSTER"/>
            </div>
            <div class="form-row">
              <FormText label="FLIGHT NO." span="2"/>
              <FormText label="DATE" span="2"/>
              <FormText label="A/C REGISTERATION" span="4"/>
              <FormText label="A/C TYPE" span="2"/>
            </div>
          </form>
        </div>
    );
  }
}