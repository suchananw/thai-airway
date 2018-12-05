import React, { Component } from "react";
import FormCheck from "./FormCheck";

export default class ChecklistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remark: "",
      arrive: {
        checked: false,
        outbound: false,
        ACParking: false,
        loadInfo: false,
        countMachine: false,
        card: false,
        arrange: false,
        conInfo: false
      },
      depart: {
        checked: false,
        inbound: false,
        ACParking: false,
        limitedTag: false,
        fragile: false,
        envelope: false,
        bus: false,
        stkPax: false,
        stkFlight: false
      }
    };
  }

  componentDidMount() {
    this.setState(this.props.data);
  }

  iterateFormCheck(names, parent) {
    let forms = names.map(name => {
      return (
        <FormCheck
          name={name}
          span="12"
          parent={parent}
          onChange={this.handleChange}
          checked={this.state[parent][name]}
        />
      );
    });
    return forms;
  }

  handleRemarkChange = event => {
    this.setState({
      remark: event.target.value
    });
  };

  handleChange = (event, parent) => {
    console.log(parent, event);
    let value = false;
    if (event.target.value === "on") {
      value = true;
    }
    this.setState({
      [parent]: {
        ...this.state[parent],
        [event.target.name]: value
      }
    });
  };

  render() {
    const name1 = [
      "outbound",
      "ACParking",
      "loadInfo",
      "countMachine",
      "card",
      "arrange",
      "conInfo"
    ];
    const name2 = [
      "inbound",
      "ACParking",
      "limitedTag",
      "fragile",
      "envelope",
      "bus",
      "stkPax",
      "stkFlight"
    ];

    return (
      <div class="container w-75 p-4">
        <form
          onSubmit={event => {
            this.props.handleSubmit(event, this.state);
          }}
        >
          <div class="form-row border rounded mw-75 my-3">
            <div class="col border-right">
              <div class="col border-right border-bottom bg-info text-white mb-3 p-3">
                ARRIVAL
              </div>
              {this.iterateFormCheck(name1, "arrive")}
            </div>
            <div class="col">
              <div class="col border-bottom bg-info text-white mb-3 p-3">
                DEPARTURE
              </div>
              {this.iterateFormCheck(name2, "depart")}
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
                value={this.state.remark}
                onChange={this.handleRemarkChange}
              />
            </div>
          </div>
          {/*<input
             onClick={this.handleClear}
             type="button"
             value="Clear"
             class="btn btn-danger mx-2"
          />*/}
          <input
            onClick={this.props.handleBack}
            type="button"
            value="Back"
            class="btn btn-info mx-2"
          />
          <input type="submit" value="Submit" class="btn btn-info mx-2" />
        </form>
      </div>
    );
  }
}
