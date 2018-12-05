import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import FormText from "./FormText";
import FormRadio from "./FormRadio";
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
      sta: "",
      eta: "",
      ata: "",
      baygate1: "",
      disemark: "",
      TSsamePlane: "",
      ciq: "",
      TScardDist: "",
      SQ: "",
      gateOpened: "",
      gateClosed: "",
      POD: "",
      std: "",
      etd: "",
      atd: "",
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
      docCheck: "",
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

  componentDidMount() {
    console.log(this.props.data);
    this.setState(this.props.data, () => { console.log(this.state) });
  }

  iterateFormtext = names => {
    let forms = names.map(name => {
      return <FormText name={name} span="12" value={this.state.name} onChange={this.onChange} />;
    });
    return forms;
  };
  iterateFormTimeSelect = (names, span) => {
    let forms = names.map(name => {
      return (
        <FormTimeSelect name={name} span={span} value={this.state.name} onChange={this.onChange} />
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
    // const formData = this.state;
    // console.log(formData);
    this.props.handleNext(event, this.state);
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
              choices={["KP", "KX"]}
              name="to"
              value={this.state.to}
              onChange={this.onChange}
            />
            <FormText span="4" name="from" value={this.state.from} onChange={this.onChange} />
            <FormSelect
              span="3"
              choices={[1, 2, 3, 4, 5, 6]}
              name="group"
              value={this.state.group}
              onChange={this.onChange}
            />
            <FormTimeSelect span="3" name="roster" value={this.state.roster} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText span="3" name="flightNo" value={this.state.flightNo} onChange={this.onChange} />
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
            <FormText span="4" name="ACregis" value={this.state.ACregis} onChange={this.onChange} />
            <FormText span="3" name="ACtype" value={this.state.ACtype} onChange={this.onChange} />
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
                  name="sta"
                  value={this.state.sta}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="eta"
                  value={this.state.eta}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="ata"
                  value={this.state.ata}
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
              <FormText span="12" name="POD" value={this.state.POD} onChange={this.onChange} />
              <div className="form-group form-row px-3 mb-0">
                <FormTimeSelect
                  span="4"
                  name="std"
                  value={this.state.std}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="etd"
                  value={this.state.etd}
                  onChange={this.onChange}
                />
                <FormTimeSelect
                  span="4"
                  name="atd"
                  value={this.state.atd}
                  onChange={this.onChange}
                />
              </div>
              {this.iterateFormtext(name2.slice(0, 2))}
              {this.iterateFormTimeSelect(name2.slice(2, 5), 12)}
              {this.iterateFormtext(name2.slice(5))}
              <div className="form-group form-row px-3 mb-0">
                <FormText name="iatci" span="6" value={this.state.iatci} onChange={this.onChange} />
                <FormText name="ostci" span="6" value={this.state.ostci} onChange={this.onChange} />
              </div>
            </div>
          </div>
          <div className="form-row">
            <FormText name="staff" span="12" value={this.state.staff} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="collected" span="8" value={this.state.collected} onChange={this.onChange} />
            <FormText name="boco" span="4" value={this.state.boco} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="busCo" span="6" value={this.state.busCo} onChange={this.onChange} />
            <FormText name="staffStand" span="6" value={this.state.staffStand} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="boardingAnnounced" span="12" value={this.state.boardingAnnounced} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="baggageBy" span="9" value={this.state.baggageBy} onChange={this.onChange} />
            <FormText name="baggageTotal" span="3" value={this.state.baggageTotal} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="babyStrollerBy" span="9" value={this.state.babyStrollerBy} onChange={this.onChange} />
            <FormText name="babyStrollerTotal" span="3" value={this.state.babyStrollerTotal} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="restrictedItemBy" span="9" disabled={true} />
            <FormText name="restrictedItemTotal" span="3" disabled={true} />
          </div>
          <div className="form-row">
            <FormText name="docCheck" span="12" value={this.state.docCheck} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormRadio
              name="byPrior"
              span="6"
              checked={this.state.byPrior}
              onChange={this.onChange}
            />
            <FormRadio
              name="byRows"
              span="6"
              checked={this.state.byRows}
              onChange={this.onChange}
            />
          </div>
          <div className="form-row">
            <FormText name="specialCase" span="7" value={this.state.specialCase} onChange={this.onChange} />
            <FormText name="handledBy" span="5" value={this.state.handledBy} onChange={this.onChange} />
          </div>
          <div className="form-row">
            <FormText name="ko" span="3" value={this.state.ko} onChange={this.onChange} />
            <FormText name="koB" span="3" value={this.state.koB} onChange={this.onChange} />
            <FormText name="lcs" span="3" value={this.state.lcs} onChange={this.onChange} />
            <FormText name="gateLeader" span="3" value={this.state.gateLeader} onChange={this.onChange} />
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
                value={this.state.remark}
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
