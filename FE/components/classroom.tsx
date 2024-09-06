import { FaEdit, FaTrashAlt } from "react-icons/fa";


import { siteConfig } from "@/config/site";

export const Classroom = () => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
      {siteConfig.classroom.map((item) => (
        <div
          key={item.title}
          className="transition-all transform hover:scale-105 hover:bg-green-400 shadow-md rounded-md m-2 border border-gray-400 p-4"
        >
          <h2 className="text-lg text-gray mb-2"><b>{item.title}</b></h2>
          <p className="text-gray">{item.description}</p>
          <div className="mt-4 flex justify-end">
            <button className="mr-2 text-blue-600 hover:text-blue-800 flex items-center">
              <FaEdit className="mr-1" />
            </button>
            <button className="text-red-600 hover:text-red-800 flex items-center">
              <FaTrashAlt className="mr-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};