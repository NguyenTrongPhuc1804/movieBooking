import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { ACCESS_TOKEN, USER_INFO } from "../../util/setting/config";
import { history } from "../../App";
import { redirect } from "react-router-dom";
import { openCustomNotificationWithIcon } from "../../util/setting/nontification";
import { displayLoading, hiddenLoading } from "./LoadingSlice";
import { historyUserBookTickets } from "../../core/modal/InfoBookTicket";
let infoUser = "";
if (localStorage.getItem(USER_INFO)) {
  infoUser = JSON.parse(localStorage.getItem(USER_INFO));
}
const initialState = {
  userInfo: infoUser,
  login: false,
  historyUserBookTicket: {},
};

export const ManagementUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.login = false;
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(USER_INFO);
      if (!localStorage.getItem(ACCESS_TOKEN)) {
        openCustomNotificationWithIcon(
          "success",
          "Đăng xuất thành công",
          "",
          "topRight"
        );
      }
      // history.push("/");
    },
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { content, statusCode } = action.payload;
      if (statusCode === 200) {
        state.userInfo = content;
        localStorage.setItem(ACCESS_TOKEN, state.userInfo.accessToken);
        localStorage.setItem(USER_INFO, JSON.stringify(state.userInfo));
        state.login = true;
      }
    });

    // history user booking ticket
    builder.addCase(getHistoryUserBookTicket.fulfilled, (state, action) => {
      const { content, statusCode } = action.payload;
      state.historyUserBookTicket = content;
    });
  },
});

// login user
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, { dispatch }) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.post(
        "QuanLyNguoiDung/DangNhap",
        user
      );
      openCustomNotificationWithIcon(
        "success",
        "Đăng nhập thành công",
        "",
        "topRight"
      );
      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      console.log(err);
      dispatch(hiddenLoading());

      return err;
    }
  }
);
//get history user booking ticket
export const getHistoryUserBookTicket = createAsyncThunk(
  "user/getHistoryBookTicket",
  async () => {
    const { data } = await requestMovie.post(
      "QuanLyNguoiDung/ThongTinTaiKhoan"
    );
    return data;
  }
);

export const { logOut } = ManagementUserSlice.actions;

export default ManagementUserSlice.reducer;
