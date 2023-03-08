import React from "react";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 h-screen ">
      <div className="col-span-9">
        sdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
      </div>
      <div className="col-span-3 relative shadow-2xl">
        <div className="px-6">
          <div className="border-b-gray-700 py-3 border  text-center ">
            <strong className="text-5xl text-[#539165]">0 đ</strong>
          </div>
          <div className="border-b-gray-700 py-3 border">
            <strong>Ten phim</strong>
            <p>Dia chi</p>
            <p>Ngay thang</p>
          </div>
          <div className="border-b-gray-700 py-3 border flex justify-between">
            <strong className="text-red-500">Ghế</strong>
            <strong className="text-[#539165] text-lg">0 đ</strong>
          </div>
          <div className="border-b-gray-700 py-3 border ">
            <p className="text-gray-500 mb-2">E-mail</p>
            <p>aksjd@gmail.com</p>
          </div>
          <div className="border-b-gray-700 py-3 border ">
            <p className="text-gray-500 mb-2">Phone</p>
            <p>989879</p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <button className="py-5 text-2xl hover:bg-[#5D9C59] bg-[#539165] w-full text-white">
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
