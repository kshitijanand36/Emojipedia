import React from "react";
import Entry from "./Entry"; 

import emoji from "../emojipedia"

function CreateEntry(props){

    return (
        <Entry
            key = {props.id}
            emoji = {props.emoji}
            name = {props.name}
            meaning = {props.meaning} />
    )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emoji.map(CreateEntry)}
      </dl>
    </div>
  );
}

export default App;
