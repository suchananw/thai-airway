import React, { Component } from "react";
import axios from "axios";
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

  handleNext = (event, report) => {
    event.preventDefault();
    console.log(report);
    const submitReport = report;
    this.setState({
      page: "checklist",
      report: submitReport
    });
  };

  handleBack = event => {
    event.preventDefault();
    this.setState({
      page: "report"
    });
  };

  handleHome = event => {
    event.preventDefault();
    this.setState({
      page: "report",
      report: {},
      chaecklist: {}
    });
  };

  handleSubmit = (event, checklist) => {
    event.preventDefault();
    const date = this.state.report.date;
    this.setState(
      {
        report: {
          ...this.state.report,
          date: date.format("DD/MM/YYYY")
        },
        checklist: checklist,
        page: "submit"
      },
      () => {
        const formData = this.state;
        console.log(formData);

        const filename = "report-" + new Date().getTime();
        axios.post(`/api/files/${filename}.pdf`, this.state, { responseType: 'blob' }).then(response => {
          console.log("response in client")
          console.log("response ", response)
          //Create a Blob from the PDF Stream
          const file = new Blob(
            [response.data],
            {
              type: 'application/pdf',
              name: filename
            });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
          window.open(fileURL);
          // //New window and display pdf
          // var a = document.createElement("a");
          // document.body.appendChild(a);
          // a.style = "display: none";
          // a.href = fileURL;
          // a.download = filename + ".pdf";
          // a.target = '_blank';
          // a.click();
        })
          .catch(error => {
            console.log(error);
          });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header p-4 font-weight-bold text-uppercase">
          <h5>{this.state.page}</h5>
        </header>
        {this.state.page === "report" ? (
          <div class="m-3">
            <ReportForm data={this.state.report} handleNext={this.handleNext} />
          </div>
        ) : this.state.page === "checklist" ? (
          <div class="m-3">
            <ChecklistForm
              data={this.state.checklist}
              handleBack={this.handleBack}
              handleSubmit={this.handleSubmit}
            />
          </div>
        ) : this.state.page === "submit" ? (
          <div className="m-3">
            Form is submitted. File downloading...
            <div>
              <input
                type="button"
                value="Home"
                className="btn btn-info m-2"
                onClick={this.handleHome}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
