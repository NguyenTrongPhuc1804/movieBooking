import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getInfoRoom } from "../../redux/reducer/ManagementBookingSlice";
import { USER_INFO } from "../../util/setting/config";
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { infoRoom } = useSelector((state) => state.ManagementBookingSlice);
  const infoUser = JSON.parse(localStorage.getItem(USER_INFO));
  useEffect(() => {
    dispatch(getInfoRoom(id));
  }, []);
  console.log(infoRoom);
  return (
    <div className="grid grid-cols-12 h-[100%] ">
      <div className="col-span-full lg:col-span-9 text-white p-5">
        <div className="bg-[#f26b38]">
          <h1 className="text-3xl ">Chọn ghế</h1>
          <div className="">Coming soon</div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-3  py-4 px-3">
        <div className="px-6 py-3  shadow-2xl">
          <div className="border-b-2 border-gray-500 py-3   text-center ">
            <strong className="text-5xl text-[#539165]">0 đ</strong>
          </div>
          <div className="border-b-2  border-gray-500 py-3 ">
            <img
              className="w-full py-2 mx-auto  h-[300px]"
              src={infoRoom.thongTinPhim?.hinhAnh}
              alt=""
            />
            <strong className="text-lg">
              Tên phim: {infoRoom.thongTinPhim?.tenPhim}
            </strong>
            <p>Địa chỉ: {infoRoom.thongTinPhim?.diaChi}</p>
            <p>
              Ngày chiếu: {infoRoom.thongTinPhim?.gioChieu}{" "}
              {infoRoom.thongTinPhim?.ngayChieu}
            </p>
          </div>
          <div className="border-b-2 border-gray-500 py-3  flex justify-between">
            <strong className="text-red-500">Ghế</strong>
            <strong className="text-[#539165] text-lg">0 đ</strong>
          </div>
          <div className="border-b-2 border-gray-500 py-3  ">
            <p className="text-gray-500 mb-2">E-mail</p>
            <p>{infoUser.email}</p>
          </div>
          <div className="border-b-2 border-gray-500 py-3  ">
            <p className="text-gray-500 mb-2">Phone</p>
            <p>{infoUser.soDT}</p>
          </div>
        </div>
        <div className=" w-full">
          <button className="py-5 text-2xl  bg-[#f26b38] w-full text-white">
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
