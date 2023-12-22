import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Modal from "react-modal";

const AddTask = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleAddTask = () => {
    // Handle adding the task (e.g., dispatching an action or calling an API)
    // You can access the category and description states here
    console.log("Category:", category);
    console.log("Description:", description);

    // Close the modal after handling the task
    closeModal();
  };

  return (
    <div>
      <div className="text-end flex justify-end gap-2 p-4">
        <button
          onClick={openModal}
          className="text-white bg-black cursor-pointer rounded-md lg:text-lg text-sm font-semibold w-auto lg:px-2 lg:py-2 px-1.5 py-1.5"
        >
          + Add New Task
        </button>
        <button className="text-white bg-black cursor-pointer rounded-full font-semibold w-auto lg:px-3 px-2 lg:py-1 lg:text-2xl md:text-xl sm:text-sm">
          +
        </button>
        <button>
          <BsThreeDotsVertical className="text-2xl text-black" />
        </button>
      </div>

      <Modal
        className="max-w-2xl mx-auto bg-red-300 text-center lg:mt-40 p-12 "
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Task Modal"
      >
        <h2 className="text-3xl text-center font-bold py-4">Add New Task</h2>
        <label className="flex justify-evenly">
         <h3 className="text-xl font-semibold"> Category:</h3>
          <input
            className="px-24"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <br />
        <label className="flex justify-evenly">
          <h3 className="text-xl font-semibold"> Description:</h3>
          <textarea
            className="w-96 h-40"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="text-white bg-black cursor-pointer rounded-md lg:text-lg text-sm font-semibold w-auto lg:px-2 lg:py-2 px-1.5 py-1.5"
            onClick={handleAddTask}
          >
            Add Task
          </button>
          <button
            className="text-white bg-black cursor-pointer rounded-md lg:text-lg text-sm font-semibold w-auto lg:px-2 lg:py-2 px-1.5 py-1.5"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddTask;
