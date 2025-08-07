import React from "react";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const NotesForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const note = location.state?.note;
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = note
        ? await axios.patch(
            `${import.meta.env.VITE_API_URL}/api/notes/edit/${id}`,
            {
              title,
              content,
            }
          )
        : await axios.post(`${import.meta.env.VITE_API_URL}/api/notes/create`, {
            title,
            content,
          });

      if (res.status === 200) {
        setTitle("");
        setContent("");
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-2xl"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="rounded-xl px-3 border border-[#858585] p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="content" className="">
          Content
        </label>
        <textarea
          id="content"
          className="rounded-xl min-h-64 max-h-96 px-3 border border-[#858585] p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-black rounded-xl p-2 w-full"
        >
          {loading ? (
            <span className="animate-spin flex items-center justify-center w-full">
              <FaSpinner />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default NotesForm;
