import React from 'react';
import './App.css';

const fetchTestDatas = function () {
  fetch('/api/v1/static')
    .then(res => res.json())
    .then((response: any) => { console.log("Test datas response", response); })
    .catch((error: any) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchTestDatas}>
        Fetch Test Datas
      </button>
    </div>
  );
}

export default App;