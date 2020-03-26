import React from 'react'
import { Sample } from './components/Sample'
// import logo from './logo.svg';
// import './App.css';
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>

const App = () => {
  console.log('aa2a')
  return (
    <div className="App">
      <Sample />
      <p>フッター</p>
    </div>
  )
}

export default App
