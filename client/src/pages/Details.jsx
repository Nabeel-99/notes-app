import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { BACKENDPORT } from "../utils/constant";
import { useEffect } from "react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(false);
  const fetchDetails = async () => {
    try {
      setFetchingDetails(true);
      const res = await axios.get(`${BACKENDPORT}/api/notes/${id}`);

      if (res.status === 200) {
        setDetails(res.data);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setFetchingDetails(false);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [id]);
  return (
    <div className="flex flex-col border border-white/20 bg-black/40 overflow-hidden min-h-[400px] h-full rounded-2xl gap-2">
      {fetchingDetails ? (
        <span className="flex my-auto items-center justify-center h-full">
          <FaSpinner className="animate-spin" />
        </span>
      ) : (
        details && (
          <React.Fragment>
            <p className="pb-4 border-b px-4 text-2xl pt-4">
              Title: {details.title}
            </p>
            <ul className="px-4 flex flex-col gap-3 text-xl pt-4">
              Content:{" "}
              {details.content.split("\n").map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Details;
