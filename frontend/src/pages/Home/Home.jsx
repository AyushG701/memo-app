import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const Home = () => {
  const [allNotes, setAllNotes] = useState([]);

  const [isSearch, setIsSearch] = useState(false);

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message: message,
      type,
    });
  };
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="MEeting on 7th April"
            date="3rd Apr 2024"
            content="meeting on thsi  is great person"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel="Example Modal"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          showToastMessage={showToastMessage}
        />
      </Modal>
    </>
  );
};

export default Home;
