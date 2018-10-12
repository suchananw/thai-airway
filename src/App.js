import React, { Component } from 'react';
import './App.css';
import ReportForm from './components/ReportForm';
import ChecklistForm from './components/ChecklistForm';
import { isMoment } from 'C:/Users/Suchanan W/AppData/Local/Microsoft/TypeScript/3.0/node_modules/moment/moment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'report',
      report: {},
      checklist: {}
    }
  }

  handleNext = () => {
    this.setState({
      page: 'checklist'
    })
  }

  handleBack = () => {
    this.setState({
      page: 'report'
    })
  }

  handleSubmit = () => {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header p-4 font-weight-bold">
          <h5>{(this.state.page==='report')? "Handling Report": "Checklist"}</h5>
        </header>
        {(this.state.page==='report')
        ?<div class="m-3">
          <ReportForm />
          <button onClick={this.handleNext} type="submit" class="btn btn-info">Next</button>
        </div>
        :(this.state.page==='checklist')
          ?<div class="m-3">
            <ChecklistForm />
            <button onClick={this.handleBack} type="submit" class="btn btn-info mx-2">Back</button>
            <button onClick={this.handleSubmit} type="submit" class="btn btn-info mx-2">Submit</button>
          </div>
          :<div>Loading ...</div>
        }
      </div>
    );
  }
}

export default App;
