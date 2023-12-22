import { BsThreeDotsVertical } from "react-icons/bs";

const AddTask = () => {
  return (
    <div>
      <div className="text-end flex justify-end gap-2 p-4">
        <button className="text-white bg-black cursor-pointer rounded-md lg:text-lg text-sm font-semibold w-auto lg:px-2 lg:py-2 px-1.5 py-1.5">
          + Add New Task
        </button>
        <button className="text-white bg-black cursor-pointer rounded-full font-semibold w-auto lg:px-3 px-2 lg:py-1 lg:text-2xl md:text-xl sm:text-sm">
          +
        </button>
        <button>
          <BsThreeDotsVertical className="text-2xl text-black" />
        </button>
      </div>
    </div>
  );
};

export default AddTask;
