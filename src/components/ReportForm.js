import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FormText from './FormText'
import FormCheck from './FormRadio'
import 'react-datepicker/dist/react-datepicker.css';
import './ReportForm.css'

export default class ReportForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Date: moment(),
      Remark: ''
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRemarkChange = this.handleRemarkChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  iterateFormtext(labels) {
    let forms = labels.map((label) => {
      return <FormText label={label} span="12"/>
    })
    return forms
  }

  handleDateChange(date){
    this.setState({Date: date})
  }

  handleRemarkChange(event) {
    this.setState({remark: event.target.value});
  }

  handleSubmit(event) {
    alert('Form was submitted');
    event.preventDefault();
  }

  render () {
    const label1 = ['BAY / GATE','DISEMARKATION','T/S SAME PLANE','CIQ','T/S CARD DISTRIBUTED','S/P ONBOARD','GATE OPENED','GATE CLOSED']
    const label2 = ['BAY / GATE','CREW ARR. GATE','INFORM BOARDING','START BOARDING','COMPLETE BOARDING','JOINING','TRANSFER','SAME PLANE REBOARD']

    return (
        <div class="container w-75 p-4">
          <form onSubmit={this.handleSubmit}>
            <div class="form-row">
              <FormText label="FROM" span="4"/>
              <FormText label="GROUP" span="4"/>
              <FormText label="ROSTER" span="4"/>
            </div>
            <div class="form-row">
              <FormText label="FLIGHT NO." span="3"/>
              <div class="form-group col-md-2 text-left">
                <label>DATE</label>
                <DatePicker dateFormat="DD/MM/YYYY" id='datePicker' class="form-control" selected={this.state.Date} onChange={this.handleDateChange}/>
              </div>
              <FormText label="A/C REGISTERATION" span="4"/>
              <FormText label="A/C TYPE" span="3"/>
            </div>
            <div class="form-row border rounded mw-75 my-3">
              <div class="col border-right">
              <div class="col border-right border-bottom bg-info text-white mb-3 p-3">ARRIVAL</div>
                <FormText label="port of origin" span="12"/>
                <div class="form-group form-row px-3 mb-0">
                  <FormText label="STA" span="4"/>
                  <FormText label="ETA" span="4"/>
                  <FormText label="ATA" span="4"/>
                </div>
                {this.iterateFormtext(label1)}
              </div>
              <div class="col">
                <div class="col border-bottom bg-info text-white mb-3 p-3">DEPARTURE</div>
                <FormText label="port of destination" span="12"/>
                <div class="form-group form-row px-3 mb-0">
                  <FormText label="STA" span="4"/>
                  <FormText label="ETA" span="4"/>
                  <FormText label="ATA" span="4"/>
                </div>
                {this.iterateFormtext(label2)}
                <div class="form-group form-row px-3 mb-0">
                  <FormText label="IATCI" span="6"/>
                  <FormText label="OSTCI" span="6"/>
                </div>
              </div>
            </div>
            <div class="form-row">
              <FormText label="STAFF ASSIGNED" span="12"/>
            </div>
            <div class="form-row">
              <FormText label="BOARDING PASS / IMM CARD / TICKET COLLECTED BY" span="8"/>
              <FormText label="BOCO BY" span="4"/>
            </div>
            <div class="form-row">
              <FormText label="BUS CO-ORDINATOR" span="6"/>
              <FormText label="STAFF STAND BY AT A/C SIDE" span="6"/>
            </div>
            <div class="form-row">
              <FormText label="BOARDING ANNOUNCED BY" span="12"/>
            </div>
            <div class="form-row">
              <FormText label="BAGGAGE INTERCEPTED BY" span="9"/>
              <FormText label="TOTAL (PCS)" span="2"/>
            </div>
            <div class="form-row">
              <FormText label="BABY STROLLER INTERCEPTED BY" span="9"/>
              <FormText label="TOTAL (PCS)" span="2"/>
            </div>
            <div class="form-row">
              <FormText label="RESTRICTED ITEM COLLECTED BY" span="9"/>
              <FormText label="TOTAL (PCS)" span="2"/>
            </div>
            <div class="form-row">
              <FormText label="DOCUMENT : CHECKED / MATCHED BY" span="12"/>
            </div>
            <div class="form-row">
              <FormCheck label="BOARDING BY PRIORITY" id="radio1" span="6"/>
              <FormCheck label="BOARDING BY ROWS" id="radio2" span="6"/>
            </div>
            <div class="form-row">
              <FormText label="SPECIAL CASE ( ARR / DEP )" span="7"/>
              <FormText label="HANDLED BY	" span="5"/>
            </div>
            <div class="form-row">
              <FormText label="KO" span="3"/>
              <FormText label="KO-B" span="3"/>
              <FormText label="LCS" span="3"/>
              <FormText label="CSS / GATE LEADER" span="3"/>
            </div>
            <div class="form-row">
              <div class="form-group text-left col-sm-12">
                <label class="text-uppercase"><u><strong>
                REMARKS / IRREGULARITIES :</strong></u></label>
                <textarea class="form-control" id="remark" rows="7" value={this.state.remark} onChange={this.handleRemarkChange}></textarea>
              </div>
            </div>
          </form>
        </div>
    );
  }
}