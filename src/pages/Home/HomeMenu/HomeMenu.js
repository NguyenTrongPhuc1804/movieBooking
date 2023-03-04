import React, { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Radio, Space, Tabs } from "antd";
import { useMediaQuery } from "react-responsive";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";
function HomeMenu(props) {
  // reposnive

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 480px)",
  });
  const [isMobile, setIsMobile] = useState("");
  useEffect(() => {
    if (isMobileDevice) {
      setIsMobile("top");
    } else {
      setIsMobile("left");
    }
  }, []);

  const { listInfoCinema } = props;
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    console.log(e);
  };

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };
  const onClick = (e) => {
    console.log("click ", e);
  };
  const renderTabsCinema = (cumRap) => {
    console.log(cumRap.lstCumRap);

    if (isMobile === "top") {
      const items = cumRap.lstCumRap.map((rap, idx) =>
        getItem(
          <div className="">
            <h1 style={{ lineHeight: "20px" }}>{rap.tenCumRap}</h1>
            <h1 style={{ lineHeight: "20px", color: "#ff7f50" }}>Chi tiết</h1>
          </div>,

          rap.maCumRap,
          <img
            src={rap.hinhAnh}
            className="h-[45px] w-[45px] rounded-xl"
          ></img>,
          rap.danhSachPhim.map((film, idx) =>
            getItem(film.tenPhim, film.maPhim, null)
          )
        )
      );

      return (
        <Menu
          className="rounded-xl"
          theme="dark"
          onClick={onClick}
          style={{
            width: "100%",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
      );
    } else {
      return (
        <Tabs
          // onChange={changeTabPosition}
          tabPosition={tabPosition}
          items={cumRap.lstCumRap.map((rap, i) => {
            return {
              label: (
                <div className="flex">
                  <img
                    key={i}
                    className="h-[40px] w-[40px] rounded-lg"
                    src={rap.hinhAnh}
                    alt=""
                  />
                  <div className="ml-2">
                    <p className="text-white ">{rap.tenCumRap}</p>
                    <p className="text-orange-400 text-left ">Chi tiết</p>
                  </div>
                </div>
              ),
              key: i,
              children: `${rap.diaChi}`,
            };
          })}
        />
      );
    }
  };

  return (
    <div className="container my-[35px]">
      <Tabs
        type="card"
        onChange={changeTabPosition}
        tabPosition={isMobile}
        items={listInfoCinema.map((rap, i) => {
          return {
            label: (
              <img
                key={i}
                className="h-[40px] w-[40px] rounded-full"
                src={rap.logo}
                alt=""
              />
            ),
            key: i,
            children: renderTabsCinema(rap),
          };
        })}
      />
    </div>
  );
}

export default React.memo(HomeMenu);

{
  /* <div className="py-3 flex">
<img className="h-[60px] w-[60px]" src={rap.hinhAnh} alt="" />
<div className="ml-2">
  <p className="text-white text-lg ">{rap.tenCumRap}</p>
  <p className="text-orange-400 text-sm ">Chi tiết</p>
</div>
</div> */
}
