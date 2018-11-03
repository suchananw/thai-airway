import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import FormText from "./FormText";
import FormCheck from "./FormRadio";
import FormSelect from "./FormSelect";
import FormTimeSelect from "./FormTimeSelect";
import "react-datepicker/dist/react-datepicker.css";
import "./ReportForm.css";

export default class ReportForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: "",
      from: "",
      group: "",
      roster: "",
      flightNo: "",
      date: moment(),
      ACregis: "",
      ACtype: "",
      POO: "",
      sta1: "",
      eta1: "",
      ata1: "",
      baygate1: "",
      disemark: "",
      TSsamePlane: "",
      ciq: "",
      TScardDist: "",
      SQ: "",
      gateOpened: "",
      gateClosed: "",
      POD: "",
      sta2: "",
      eta2: "",
      ata2: "",
      baygate2: "",
      crew: "",
      inform: "",
      start: "",
      complete: "",
      joining: "",
      transfer: "",
      samePlaneReboard: "",
      iatci: "",
      ostci: "",
      staff: "",
      collected: "",
      boco: "",
      busCo: "",
      staffStand: "",
      boardingAnnounced: "",
      baggageBy: "",
      baggageTotal: "",
      babyStrollerBy: "",
      babyStrollerTotal: "",
      restrictedItemBy: "-",
      restrictedItemTotal: "-",
      docCheck: "-",
      byPrior: "",
      byRows: "",
      specialCase: "",
      handledBy: "",
      ko: "",
      koB: "",
      lcs: "",
      gateLeader: "",
      remark: ""
    };
  }

  iterateFormtext = names => {
    let forms = names.map(name => {
      return <FormText name={name} span="12" onChange={this.onChange} />;
    });
    return forms;
  };
  iterateFormTimeSelect = (names, span) => {
    let forms = names.map(name => {
      return (
        <FormTimeSelect name={name} span={span} onChange={this.onChange} />
      );
    });
    return forms;
  };

  onDateChange = date => {
    this.setState({ date: date });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const formData = this.state;
    console.log(formData);
    this.props.handleNext(this.state);
  };

  render() {
    const name1 = [
      "baygate1",
      "disemark",
      "TSsamePlane",
      "ciq",
      "TScardDist",
      "SQ",
      "gateOpened",
      "gateClosed"
    ];
    const name2 = [
      "baygate2",
      "crew",
      "inform",
      "start",
      "complete",
      "joining",
      "transfer",
      "samePlaneReboard"
    ];

    return (
      <div className="container w-75 p-4">
        <form onSubmit={this.onSubmit}>
          <div className="form-row">
            <FormSelect
              span="2"
              choices={["kp", "kx"]}
              name="to"
              onChange={this.onChange}
            />
            <FormText span="4" name="from" onChange={this.onChange} />
            <FormSelect
              span="3"
              choices={[1, 2, 3, 4, 5, 6]}
              name="group"
              onChange={this.onChange}
            />
            <FormTimeSelect span="3" name="roster" onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText span="3" name="flightNo" onChange={this.onChange} />
            <div className="form-group col-md-2 text-left">
              <label>DATE</label>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                id="datePicker"
                className="form-control"
                selected={this.state.date}
                onChange={this.onDateChange}
              />
            </div>
            <FormText span="4" name="ACregis" onChange={this.onChange} />
            <FormText span="3" name="ACtype" onChange={this.onChange} />
          </div>
          <div className="form-row border rounded mw-75 my-3">
            <div className="col border-right">
              <div className="col border-right border-bottom bg-info text-white mb-3 p-3">
                ARRIVAL
              </div>
              <FormText
                span="12"
                name="POO"
                value={this.state.POO}
                onChange={this.onChange}
              />
              <div className="form-group form-row px-3 mb-0">
                <FormTimeSelect
                  span="4"
                  name="sta1"
                  value={this.state.sta1}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="eta1"
                  value={this.state.eta1}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="ata1"
                  value={this.state.ata1}
                  onChange={this.onChange}
                />
              </div>
              {this.iterateFormtext(name1.slice(0, 6))}
              {this.iterateFormTimeSelect(name1.slice(6), 12)}
            </div>
            <div className="col">
              <div className="col border-bottom bg-info text-white mb-3 p-3">
                DEPARTURE
              </div>
              <FormText span="12" name="POD" onChange={this.onChange} />
              <div className="form-group form-row px-3 mb-0">
                <FormTimeSelect span="4" name="sta1" onChange={this.onChange} />
                <FormTimeSelect span="4" name="eta1" onChange={this.onChange} />
                <FormTimeSelect span="4" name="ata1" onChange={this.onChange} />
              </div>
              {this.iterateFormtext(name2.slice(0, 2))}
              {this.iterateFormTimeSelect(name2.slice(2, 5), 12)}
              {this.iterateFormtext(name2.slice(5))}
              <div className="form-group form-row px-3 mb-0">
                <FormText name="iatci" span="6" />
                <FormText name="ostci" span="6" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <FormText name="staff" span="12" />
          </div>
          <div className="form-row">
            <FormText name="collected" span="8" />
            <FormText name="boco" span="4" />
          </div>
          <div className="form-row">
            <FormText name="busCo" span="6" />
            <FormText name="staffStand" span="6" />
          </div>
          <div className="form-row">
            <FormText name="boardingAnnounced" span="12" />
          </div>
          <div className="form-row">
            <FormText name="baggageBy" span="9" />
            <FormText name="baggageTotal" span="3" />
          </div>
          <div className="form-row">
            <FormText name="babyStrollerBy" span="9" />
            <FormText name="babyStrollerTotal" span="3" />
          </div>
          <div className="form-row">
            <FormText name="restrictedItemBy" span="9" disabled={true} />
            <FormText name="restrictedItemTotal" span="3" disabled={true} />
          </div>
          <div className="form-row">
            <FormText name="docCheck" span="12" disabled={true} />
          </div>
          <div className="form-row">
            <FormCheck
              name="byPrior"
              span="6"
              checked={this.state.byPrior}
              onChange={this.onChange}
            />
            <FormCheck
              name="byRows"
              span="6"
              checked={this.state.byRows}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <FormText name="specialCase" span="7" />
            <FormText name="handledBy" span="5" />
          </div>
          <div className="form-row">
            <FormText name="ko" span="3" onChange={this.onChange} />
            <FormText name="koB" span="3" onChange={this.onChange} />
            <FormText name="lcs" span="3" onChange={this.onChange} />
            <FormText name="gateLeader" span="3" onChange={this.onChange} />
          </div>
          <div className="form-row">
            <div className="form-group text-left col-sm-12">
              <label className="text-uppercase">
                <u>
                  <strong>REMARKS / IRREGULARITIES :</strong>
                </u>
              </label>
              <textarea
                className="form-control"
                id="remark"
                rows="7"
                name="remark"
                onChange={this.onChange}
              />
            </div>
          </div>
          <input type="submit" value="Next" className="btn btn-info" />
        </form>
      </div>
    );
  }
}
