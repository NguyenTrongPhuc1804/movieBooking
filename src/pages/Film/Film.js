import { Button, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListFilm } from "../../redux/reducer/ManagementFilmSlice";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
function Film() {
  const dispatch = useDispatch();
  const { listFilmDefault } = useSelector((state) => state.ManagementFilmSlice);
  console.log(listFilmDefault);
  useEffect(() => {
    dispatch(getListFilm());
  }, []);
  const onSearch = (value) => console.log(value);
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const columns = [
    {
      title: "Mã Phim",
      width: "10%",

      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      //   sortOrder: "descend ",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",

      width: "30%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, record) => {
        return <img className="w-[50px] h-[70px]" src={text} alt="" />;
      },
      responsive: ["sm"],
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text) => {
        return <p className="w-[400px] truncate ...">{text}</p>;
      },
      responsive: ["lg"],
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) => {
        return (
          <div className="">
            <Button className="h-[40px] bg-[#1677ff] mr-3" type="primary">
              <EditOutlined />
            </Button>
            <Button className="h-[40px]  " danger type="primary">
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  const data = listFilmDefault;
  return (
    <>
      <h1 className="text-4xl font-bold">Quản lý phim</h1>
      <div className="w-[500px] bg-[#1677ff] my-6 rounded-lg  ">
        <Search
          placeholder="Tìm phim"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
      <Button type="primary " className="mb-4" ghost>
        Thêm Phim
      </Button>
      <div className="">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
}

export default Film;
