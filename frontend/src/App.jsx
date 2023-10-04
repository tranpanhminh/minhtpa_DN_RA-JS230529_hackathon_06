import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listNotes, setListNotes] = useState([]);
  const [noteName, setNoteName] = useState("");

  const fetchListNotes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/notes");
      setListNotes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListNotes();
  }, []);

  // Handle Add
  const handleAdd = async () => {
    if (!noteName) {
      alert("Vui lòng nhập thông tin!");
      return;
    } else {
      const newNote = {
        name: noteName,
      };
      try {
        const response = await axios.post(
          "http://localhost:4000/api/notes/add",
          newNote
        );
        console.log(response, "RESPONSE");
        fetchListNotes();
        setNoteName("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Handle Delete
  const handleDelete = async (noteId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/notes/delete/${noteId}`
      );
      console.log(response);
      fetchListNotes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="header">
        <div className="navigation">
          <h1>Note App</h1>
        </div>
      </header>
      <div className="background">
        <div className="manage-items-box">
          <div className="add-bar">
            <div className="add-form">
              <input
                type="text"
                placeholder="Take a note"
                value={noteName}
                onChange={(event) => setNoteName(event.target.value)}
              />
              <button onClick={handleAdd} className="add-btn">
                Add
              </button>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <td>#ID</td>
                <td>Task</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {listNotes?.map((note) => {
                return (
                  <tr key={note.id}>
                    <td>{note.id}</td>
                    <td>{note.name}</td>
                    <td className="group-btn">
                      <button
                        onClick={() => handleDelete(note.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
