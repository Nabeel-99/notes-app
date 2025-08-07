import React from "react";
import NotesForm from "../components/NotesForm";

const Edit = () => {
  return (
    <div className="flex flex-col gap-6 pb-20 items-center">
      <p className="font-bold text-4xl">Edit Your Note</p>
      <NotesForm />
    </div>
  );
};

export default Edit;
