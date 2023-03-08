import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
function CheckoutTemplate() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CheckoutTemplate;
