// import React,{useState} from "react";
// import CreateNotes from './CreateNote

function Notes(props) {

  const deleteNote = ()=>{
    props.NoteDelete(props.id);
  }
    return (
        // <div className="allNotes">

      <div className="Notes">
        <h1>{props.Title}</h1>
        <p>{props.Notes}</p>
        {/* <button onClick={deleteNote} className="deleteBtn">X</button> */}
      </div>
        // </div>
    );
  }
  export default Notes;
  