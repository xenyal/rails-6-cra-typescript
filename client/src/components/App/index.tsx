import React from 'react';
import NavBar from "../NavBar";
import { useAuth0 } from "../../utils/auth0-wrapper";
import './App.css';


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <div>
        <span>This was an auto-deployed message!</span>
      </div>
    </div>
  );
}

export default App;
