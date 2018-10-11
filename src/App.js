import React, { Component } from 'react';
import './App.css';
import ReportForm from './components/ReportForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      page: 'report'
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
          
            <button type="submit" class="btn btn-info">Back</button>
            <button type="submit" class="btn btn-info">Submit</button>
          </div>
          :<div>Loading ...</div>
        }
      </div>
    );
  }
}

export default App;
