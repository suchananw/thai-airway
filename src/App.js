import React, { Component } from "react";
import "./App.css";
import ReportForm from "./components/ReportForm";
import ChecklistForm from "./components/ChecklistForm";
import { PDFExport } from "@progress/kendo-react-pdf";

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
      checklist: checklist,
      page: "submit"
    });
  };

  exportPDF = () => {
    this.resume.save();
  };

  render() {
    return (
      <div className="App">
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
        ) : null}
      </div>
    );
  }
}

export default App;
