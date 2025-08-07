import axios from "axios";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotesCard = ({ note, setNotes }) => {
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/notes/${id}`
      );
      if (res.status === 200) {
        setNotes((prev) => prev.filter((note) => note._id !== id));
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="border  border-[#191818] rounded-2xl p-6 bg-[#030511] flex flex-col gap-3">
      <Link
        to={`/details/${note._id}`}
        className="border border-[#191818] rounded-xl overflow-hidden"
      >
        <img
          src="https://w0.peakpx.com/wallpaper/626/721/HD-wallpaper-writing-note-cup-create.jpg"
          alt="random note"
          className="object-cover"
        />
      </Link>
      <Link to={`/details/${note._id}`} className="flex flex-col gap-2">
        <p className="font-bold">{note.title}</p>
        <p className="line-clamp-3"> {note.content}</p>
      </Link>
      <div className="flex items-center mt-1 justify-end gap-2">
        <Link
          to={`/edit/${note._id}`}
          state={{ note }}
          className="bg-[#303032] p-2 rounded-2xl"
        >
          <FaEdit />
        </Link>
        <button
          onClick={() => handleDelete(note._id)}
          className="bg-[#303032] p-2 rounded-2xl"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
