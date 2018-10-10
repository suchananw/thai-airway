import React, { Component } from 'react';
import './App.css';
import ReportForm from './components/ReportForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header p-4 font-weight-bold">
          <h5>Handling Report</h5>
        </header>
        <ReportForm />
      </div>
    );
  }
}

export default App;
