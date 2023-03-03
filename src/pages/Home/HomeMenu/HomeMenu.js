import React, { useState } from "react";
import { Radio, Space, Tabs } from "antd";
function HomeMenu() {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  return (
    <div>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((item, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </div>
  );
}

export default HomeMenu;
