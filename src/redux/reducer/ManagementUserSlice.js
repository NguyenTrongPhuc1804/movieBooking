import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { ACCESS_TOKEN, USER_INFO } from "../../util/setting/config";
import { history } from "../../App";
import { redirect } from "react-router-dom";
const initialState = {
  userInfo: {},
};

export const ManagementUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { content, statusCode } = action.payload;
      if (statusCode === 200) {
        state.userInfo = content;
        localStorage.setItem(ACCESS_TOKEN, state.userInfo.accessToken);
        localStorage.setItem(USER_INFO, JSON.stringify(state.userInfo));
      }
    });
  },
});

// login user
export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  const { data } = await requestMovie.post("QuanLyNguoiDung/DangNhap", user);

  return data;
});

export const { reducerName } = ManagementUserSlice.actions;

export default ManagementUserSlice.reducer;
