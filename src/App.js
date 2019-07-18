import React from "react";
import NavBar from "./NavBar";
import NasaCard from "./NasaCard";
import "./App.css";
import { Segment } from "semantic-ui-react";
import PeopleInSpace from './PeopleInSpace'

function App() {
  return (
    <div className="App">
     <NavBar />
     <NasaCard />
    <PeopleInSpace />
    
     
    </div>
  );
}

export default App;





