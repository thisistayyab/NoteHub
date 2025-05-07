import { useContext } from "react";
import React  from "react";
import noteContext from "../context/noteContext"

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="col-md-3 my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">
                {note.description}
            </p>
            <i className="fa-regular fa-trash-can" onClick={()=>{deleteNote(note._id);props.showAlert("Successfully Deleted!","Success")}}></i>
            <i className="fa-regular fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
