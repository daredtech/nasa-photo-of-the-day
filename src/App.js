import React from "react";
import NavBar from "./NavBar";
import NasaCard from "./NasaCard";
import "./App.css";

function App() {
  return (
    <div className="App">
     
     <NavBar />
     <NasaCard />
     
    </div>
  );
}

export default App;





// In App.js (or where ever you wanted to fetch the data) add state for the data you'll be getting from NASA.
// Add an effect hook to handle the API call side effect.
// Go to the NASA APOD API docs and read through the docs to see how to make the API call.
// You don't need an API key. However you may need one if you exceed the API request limits.
// Using the endpoint given, fetch the data using axios.
// In your .then() make sure to console.log the response so you can look at the shape of the data. 😃
// Before you add your data to state, make sure your effect hook has a dependency array (probably empty, since we don't want this effect synced up to any state/props), otherwise you will start an infinite loop, and you will exceed the API rate limits of the DEMO_KEY and need to use a real API_KEY.