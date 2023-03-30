import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function ManagementUser() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <div>
      <p className="text-4xl font-bold text-center">
        Quản lý tài khoản người dùng
      </p>
      <div className="max-w-[500px] bg-[#1677ff] my-6 rounded-lg mx-auto ">
        <Search
          placeholder="Tìm người dùng"
          allowClear
          enterButton="Search"
          size="large"
          onChange={(e) => {
            setSearch(e.target.value);

            // searchRef.current = setTimeout(() => {
            //   setSearch(e.target.value);
            // }, 6000);
          }}
          value={search}
          onSearch={onSearch}
        />
      </div>
      <Button
        type="primary "
        onClick={() => {
          navigate("/admin/film/add-new");
        }}
        className="mb-4"
        ghost
      >
        Thêm người dùng
      </Button>
    </div>
  );
}

export default ManagementUser;
