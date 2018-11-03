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
        ) : (
          <div>
            <PDFExport
              paperSize={"A4"}
              fileName="test.pdf"
              ref={r => (this.resume = r)}
            >
              <table class="toppart">
                <tr>
                  <td class="logo" colspan="1">
                    <img
                      alt="Thai Airway"
                      src="Thai_Airways_Logo.svg"
                      height="30px"
                    />
                  </td>
                  <td class="title" colspan="6">
                    <h3>kp airside handling report</h3>
                  </td>
                </tr>
                <tr>
                  <td>TO KP</td>
                  <td>FROM</td>
                  <td>____________________</td>
                  <td>GROUP</td>
                  <td>___________________</td>
                  <td>ROSTER</td>
                  <td>____________________</td>
                </tr>
              </table>
            </PDFExport>
            <button onClick={this.exportPDF}>download</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
