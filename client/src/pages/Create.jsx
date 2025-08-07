import NotesForm from "../components/NotesForm";

const Create = () => {
  return (
    <div className="flex flex-col gap-6 pb-20 items-center">
      <p className="font-bold text-4xl">Create Your Note</p>
      <NotesForm />
    </div>
  );
};

export default Create;
