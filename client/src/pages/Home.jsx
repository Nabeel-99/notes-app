import React from "react";
import NotesCard from "../components/NotesCard";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [fetching, setFetching] = useState(false);
  const fetchUserNotes = async () => {
    try {
      setFetching(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/notes`);

      if (res.status === 200) {
        setNotes(res.data);
      }
    } catch (error) {
      // console.log("error", error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchUserNotes();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <section className="flex flex-col gap-2">
        {" "}
        <p className="text-3xl">
          Welcome{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#94eef3] to-[#9bbedb]">
            Nabeel Farouq
          </span>
        </p>
      </section>
      <section className="grid grid-cols-3 gap-4">
        {fetching ? (
          Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse border border-[#191818] h-96 bg-[#030511] rounded-2xl"
            ></div>
          ))
        ) : notes.length > 0 ? (
          notes.map((note) => (
            <NotesCard key={note._id} note={note} setNotes={setNotes} />
          ))
        ) : (
          <p>No Notes Found</p>
        )}
      </section>
    </div>
  );
};

export default Home;
