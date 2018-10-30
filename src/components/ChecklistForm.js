import React, { Component } from "react";
import FormCheck from "./FormCheck";

export default class ChecklistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist: {
        remark: "",
        arrive: true,
        depart: true
      }
    };
  }

  iterateFormCheck(labels) {
    let forms = labels.map(label => {
      return <FormCheck label={label} span="12" id="" />;
    });
    return forms;
  }

  handleRemarkChange = event => {
    this.setState({
      checklist: { remark: event.target.value }
    });
  };

  handleClear = () => {
    this.setState({
      arrive: true,
      depart: true
    });
  };

  render() {
    const label1 = [
      "OUTBOUND CONNECTIONS SUMMARY",
      "A/C PARKING BAY",
      "PASSENGER LOAD INFORMATION",
      "COUNTING MACHINE",
      "GATE / TRANSIT CARD",
      "TRANSPORTATION ARRANGEMENT",
      "SHORT CONNECTING INFORMATION"
    ];
    const label2 = [
      "INBOUND CONNECTION SUMMARY",
      "A/C PARKING BAY",
      "LIMITED RELEASE TAG",
      "FRAGILE TAG",
      "ENVELOPE FOR RESTRICTED ITEM",
      "BUS RELEASE FORM FOR DRIVER",
      "STICKERS FOR INTERNATIONAL PAX",
      "STICKERS FOR FLIGHT COMBINED"
    ];

    return (
      <div class="container w-75 p-4">
        <form onSubmit={this.props.handleSubmit}>
          <div class="form-row border rounded mw-75 my-3">
            <div class="col border-right">
              <div class="col border-right border-bottom bg-info text-white mb-3 p-3">
                ARRIVAL
              </div>
              {this.iterateFormCheck(label1)}
            </div>
            <div class="col">
              <div class="col border-bottom bg-info text-white mb-3 p-3">
                DEPARTURE
              </div>
              {this.iterateFormCheck(label2)}
            </div>
          </div>
          <div class="form-row">
            <div class="form-group text-left col-sm-12">
              <label class="text-uppercase">
                <u>
                  <strong>REMARKS / IRREGULARITIES :</strong>
                </u>
              </label>
              <textarea
                class="form-control"
                id="remark2"
                rows="10"
                value={this.state.checklist.remark}
                onChange={this.handleRemarkChange}
              />
            </div>
          </div>
          <button
            onClick={this.handleClear}
            type="button"
            class="btn btn-danger mx-2"
          >
            Clear
          </button>
          <button
            onClick={this.props.handleBack}
            type="button"
            class="btn btn-info mx-2"
          >
            Back
          </button>
          <button type="submit" class="btn btn-info mx-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
