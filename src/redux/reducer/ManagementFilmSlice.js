import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Await } from "react-router-dom";
import requestMovie from "../../services/servicesReques";
import repuestMovie from "../../services/servicesReques";
import { ACCESS_TOKEN, DOMAIN } from "../../util/setting/config";
import { openCustomNotificationWithIcon } from "../../util/setting/nontification";
import { displayLoading, hiddenLoading } from "./LoadingSlice";

const initialState = {
  listFilm: [],
  listFilmDefault: [],
  dangChieu: true,
  sapChieu: true,
  filmEdit: {},
};

export const ManagementFilmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    setPhimSapChieu: (state, action) => {
      // state.sapChieu = !state.sapChieu;
      state.listFilm = state.listFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
    },
    setPhimDangChieu: (state, action) => {
      // state.dangChieu = !state.dangChieu;
      state.listFilm = state.listFilmDefault.filter(
        (film) => film.dangChieu === state.sapChieu
      );
    },
    setAllFilm: (state, action) => {
      state.listFilm = state.listFilmDefault;
    },
  },
  extraReducers: (builder) => {
    // get list film
    builder.addCase(getListFilm.fulfilled, (state, action) => {
      state.isLoading = false;

      const { content } = action.payload;
      state.listFilm = content;
      state.listFilmDefault = content;
    });
    builder.addCase(getListFilm.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListFilm.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload.message;
    });
    // upload film
    builder.addCase(uploadFilm.fulfilled, (state, action) => {
      console.log("action", action);
    });
    // get data edit page film
    builder.addCase(getEditFilm.fulfilled, (state, action) => {
      const { content } = action.payload;
      state.filmEdit = content;
    });
    //Edit upload film
    builder.addCase(editUploadFilm.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

// getListFilm

export const getListFilm = createAsyncThunk("film/getListFilm", async () => {
  const { data } = await requestMovie.get(
    "QuanLyPhim/LayDanhSachPhim?maNhom=GP00"
  );
  return data;
});
// add Film with img
export const uploadFilm = createAsyncThunk(
  "film/uploadFilm",
  async (formData, { dispatch }) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.post(
        "QuanLyPhim/ThemPhimUploadHinh",
        formData
      );
      // console.log(data);
      openCustomNotificationWithIcon(
        "success",
        "Thêm phim thành công",
        "",
        "topRight"
      );
      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      dispatch(hiddenLoading());
      openCustomNotificationWithIcon(
        "success",
        "Thêm phim thất bại",
        "",
        "topRight"
      );
      console.log("err", err);
      return err;
    }
  }
);
//get data detail film from edit page admin
export const getEditFilm = createAsyncThunk(
  "film/editFilm",
  async (id, { dispatch }) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.get(
        `QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
      );
      // console.log(data);

      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      dispatch(hiddenLoading());

      console.log("err", err);
      return err;
    }
  }
);
//edit upload film from edit page
export const editUploadFilm = createAsyncThunk(
  "film/editUploadFilm",
  async (formData, { dispatch }) => {
    dispatch(displayLoading());
    try {
      const { data } = await requestMovie.post(
        `QuanLyPhim/CapNhatPhimUpload`,
        formData
      );
      // console.log(data);

      dispatch(hiddenLoading());
      return data;
    } catch (err) {
      dispatch(hiddenLoading());

      console.log("err", err);
      return err;
    }
  }
);
export const { setPhimSapChieu, setPhimDangChieu, setAllFilm } =
  ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;
