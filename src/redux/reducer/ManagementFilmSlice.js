import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import requestMovie from "../../services/servicesReques";
import repuestMovie from "../../services/servicesReques";

const initialState = {
  listFilm: [],
  listFilmDefault: [],
  dangChieu: true,
  sapChieu: true,
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
  },
});

// getListFilm

export const getListFilm = createAsyncThunk("film/getListFilm", async () => {
  const { data } = await requestMovie.get(
    "QuanLyPhim/LayDanhSachPhim?maNhom=GP00"
  );
  return data;
});
// upload Film with img
export const uploadFilm = createAsyncThunk(
  "film/uploadFilm",
  async (formData) => {
    try {
      const { data } = await requestMovie.post(
        "QuanLyPhim/ThemPhimUploadHinh",
        formData
      );
      return data;
    } catch (err) {
      console.log("err", err);
    }
  }
);
export const { setPhimSapChieu, setPhimDangChieu, setAllFilm } =
  ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;
