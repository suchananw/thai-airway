import React, { Component } from 'react';
import './App.css';
import ReportForm from './components/ReportForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Handling Report
        </header>
        <ReportForm />
      </div>
    );
  }
}

export default App;
