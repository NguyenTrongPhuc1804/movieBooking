import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getInfoRoom,
  updateTicket,
} from "../../redux/reducer/ManagementBookingSlice";
import { USER_INFO } from "../../util/setting/config";
import { ArrowLeftOutlined } from "@ant-design/icons";
import _ from "lodash";
function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { infoRoom } = useSelector((state) => state.ManagementBookingSlice);
  const { listTicket } = useSelector((state) => state.ManagementBookingSlice);
  const infoUser = JSON.parse(localStorage.getItem(USER_INFO));
  console.log(listTicket);
  useEffect(() => {
    dispatch(getInfoRoom(id));
  }, []);

  const renderGhe = () =>
    infoRoom.danhSachGhe?.map((ghe, idx) => {
      let index = listTicket.findIndex((gheDD) => gheDD.maGhe === ghe.maGhe);

      return (
        <Fragment key={idx}>
          <button
            onClick={() => {
              dispatch(updateTicket(ghe));
            }}
            disabled={ghe.daDat}
            className={
              ghe.loaiGhe === "Thuong"
                ? `w-[35px] h-[35px] m-1 ${
                    ghe.daDat ? "bg-[#EB455F] text-white" : ""
                  }  
             text-center ${
               index !== -1 ? "bg-[#5D9C59] text-white" : ""
             }  rounded-lg border border-gray-700`
                : ` ${
                    ghe.daDat ? "bg-[#EB455F] text-white" : ""
                  }  w-[35px] h-[35px] m-1  text-center rounded-lg   border-4 border-red-900 ${
                    index !== -1 ? "bg-[#5D9C59] text-white" : ""
                  }`
            }
          >
            {ghe.daDat ? "X" : ghe.tenGhe}
          </button>
          {(idx + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  return (
    <div className="grid grid-cols-12 content-center h-[100%] ">
      <div className="col-span-full lg:col-span-9 text-white p-5 ">
        <div className="bg-[#f26b38] p-5">
          <h1 className="text-3xl ">Chọn ghế</h1>
          <div className=" bg-white  text-gray-700 text-left lg:text-center    overflow-auto p-9">
            <div className="lg:w-full text-[14px] w-[900px]">{renderGhe()}</div>
            <div className="flex w-[200px] lg:w-full flex-wrap justify-start lg:justify-center mt-7">
              <div className="flex items-center">
                <p
                  className="w-[35px] h-[35px] m-1   
             text-center   rounded-lg border border-gray-700"
                ></p>
                <span>Ghế có thể đặt</span>
              </div>
              <div className="flex items-center">
                <p
                  className="w-[35px] h-[35px] m-1 bg-[#EB455F] text-white  
             text-center rounded-lg border border-gray-700 flex items-center justify-center"
                >
                  X
                </p>
                <span>Ghế đã đặt</span>
              </div>
              <div className="flex items-center">
                <p className="   w-[35px] h-[35px] m-1  text-center rounded-lg   border-4 border-red-900 "></p>
                <span>Ghế Vip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-3 h-full  px-3">
        <div className="px-6 py-3 h-full shadow-2xl">
          <div className="border-b-2 border-gray-500 py-3   text-center ">
            <strong className="text-5xl text-[#539165]">
              {listTicket
                .reduce((bill, ghe, idx) => bill + ghe.giaVe, 0)
                .toLocaleString()}
              vnd
            </strong>
          </div>
          <div className="border-b-2  border-gray-500 py-3 ">
            <img
              className="w-[50%] py-2 mx-auto  h-[250px]"
              src={infoRoom.thongTinPhim?.hinhAnh}
              alt=""
            />
            <strong className="text-lg">
              Tên phim: {infoRoom.thongTinPhim?.tenPhim}
            </strong>
            <p>Địa chỉ: {infoRoom.thongTinPhim?.diaChi}</p>
            <p>
              Ngày chiếu: {infoRoom.thongTinPhim?.gioChieu}
              {infoRoom.thongTinPhim?.ngayChieu}
            </p>
          </div>
          <div className="border-b-2 border-gray-500 py-3  flex justify-between">
            <strong className="text-red-500 flex flex-wrap w-[200px]">
              Ghế :
              {_.sortBy(listTicket, ["stt"]).map((ghe, idx) => (
                <span key={idx} className="ml-2">
                  {ghe.tenGhe}
                </span>
              ))}
            </strong>
            <strong className="text-[#539165] text-lg">
              {listTicket
                .reduce((bill, ghe, idx) => bill + ghe.giaVe, 0)
                .toLocaleString()}
              vnd
            </strong>
          </div>
          <div className="border-b-2 border-gray-500 py-3  ">
            <p className="text-gray-500 mb-2">E-mail</p>
            <p>{infoUser.email}</p>
          </div>
          <div className="border-b-2 border-gray-500 py-3  ">
            <p className="text-gray-500 mb-2">Phone</p>
            <p>{infoUser.soDT}</p>
          </div>
          <div className="flex justify-around mt-5">
            <button className="p-3  w-[150px]  text-xl flex items-center justify-around border border-gray-700 transition hover:bg-[#fff]  text-gray-700">
              <ArrowLeftOutlined />
              Trở lại
            </button>
            <button className="p-3   w-[150px] text-xl   bg-[#f26b38] transition text-white">
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
