"use client";

import React, { useState } from "react";

function AddClassroom() {
  const [className, setClassName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý logic gửi thông tin lớp học ở đây
    console.log("Tên lớp học:", className);
    // Xóa form sau khi gửi
    setClassName("");
  };

  return (
    <div className="min-h-[600px] bg-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Thêm Lớp Học</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="p-2 border border-gray-300">
                    <label
                      htmlFor="className"
                      className="block text-gray-700 mb-2"
                    >
                      Tên lớp học
                    </label>
                    <input
                      type="text"
                      id="className"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="Nhập tên lớp học"
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700"
            >
              Thêm lớp học
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddClassroom;
