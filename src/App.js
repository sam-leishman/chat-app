import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    )
  }
}

export default App;

// comment bruh