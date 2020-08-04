import React from 'react';

import './App.css';

function App() {
  return (
    // BEM
    <div className="app">
      <h1>Hello Korey</h1>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
