import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Header";
import { Oscar } from "./components/Oscar";

function App() {
  const personName = {
    first: "Mutua",
    last: "Joseph",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "clark", last: "Kent" },
    { first: "Joseph", last: "Mutua" },
  ];

  return (
    <div className="App">
      <Greet name="Mutua" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        {" "}
        <Heading>Placeholder text</Heading>
      </Oscar>
    </div>
  );
}

export default App;
