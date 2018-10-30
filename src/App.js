import React, { Component } from "react";
import "./App.css";
import ReportForm from "./components/ReportForm";
import ChecklistForm from "./components/ChecklistForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "report",
      report: {},
      checklist: {}
    };
  }

  handleNext = report => {
    console.log(report);
    const submitReport = report;
    this.setState({
      page: "checklist",
      report: submitReport
    });
  };

  handleBack = () => {
    this.setState({
      page: "report"
    });
  };

  handleSubmit = checklist => {
    this.setState({
      checklist: checklist
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header p-4 font-weight-bold">
          <h5>
            {this.state.page === "report" ? "Handling Report" : "Checklist"}
          </h5>
        </header>
        {this.state.page === "report" ? (
          <div class="m-3">
            <ReportForm handleNext={this.handleNext} />
          </div>
        ) : this.state.page === "checklist" ? (
          <div class="m-3">
            <ChecklistForm
              handleBack={this.handleBack}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : (
          <div>Loading ...</div>
        )}
      </div>
    );
  }
}

export default App;
