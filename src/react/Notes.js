import React, { useState } from "react";

const handleSubmit = (e, notes, setNotes, input, setInput) => {
  e.preventDefault();
  const id = notes.length ? notes[notes.length - 1].id + 1 : 0;

  setNotes([...notes, { id, message: input }]);
  setInput("");
};

const deleteNote = (id, notes, setNotes) => {
  setNotes(notes.filter((note) => note.id !== id));
};

export const Note = ({ id, message, deleteNote }) => {
  return (
    <li>
      Note: {id}, {message}{" "}
      <button onClick={() => deleteNote(id)}>delete</button>
    </li>
  );
};

export default () => {
  const [notes, setNotes] = useState([{ id: 1, message: "1st Note" }]);

  const [input, setInput] = useState("");

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, notes, setNotes, input, setInput)}>
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <button>Submit</button>
      </form>
      {notes.map((note) => (
        <Note
          message={note.message}
          id={note.id}
          deleteNote={(id) => deleteNote(id, notes, setNotes)}
          key={note.id}
        />
      ))}
    </div>
  );
};
