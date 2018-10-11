import React, { Component } from 'react';
import './App.css';
import ReportForm from './components/ReportForm';
import ChecklistForm from './components/ChecklistForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'checklist'
    }
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
          <button type="submit" class="btn btn-info">Next</button>
        </div>
        :(this.state.page==='checklist')
          ?<div class="m-3">
            <ChecklistForm />
            <button type="submit" class="btn btn-info mx-2">Back</button>
            <button type="submit" class="btn btn-info mx-2">Submit</button>
          </div>
          :<div>Loading ...</div>
        }
      </div>
    );
  }
}

export default App;
