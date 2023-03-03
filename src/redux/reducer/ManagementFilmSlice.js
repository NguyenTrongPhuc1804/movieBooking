import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Await } from "react-router-dom";
import repuestMovie from "../../services/servicesReques";

const initialState = {
  listFilm: [
    {
      maPhim: 10894,
      tenPhim: "Nhà Kho Chết Chóc",
      biDanh: "nha-kho-chet-choc",
      trailer: "https://www.youtube.com/embed/UzudqOzRfmU",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/nha-kho-chet-choc_gp00.jpeg",
      moTa: "Một gia đình chuyển đến một nơi yên tĩnh và biệt lập, nhưng ác mộng lại ập tới khi người vợ nghe thấy những điều quỷ dị trong nhà kho, và ngày càng tồi tệ đến mức họ khó có thể phân biệt được đâu là mơ và đâu là thực.",
      maNhom: "GP00",
      ngayKhoiChieu: "2023-02-26T15:40:02.26",
      danhGia: 6,
      hot: false,
      dangChieu: false,
      sapChieu: true,
    },
  ],
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
  },
});

// getListFilm

export const getListFilm = createAsyncThunk("film/getListFilm", async () => {
  const { data } = await repuestMovie.get(
    "QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
  );
  return data;
});

export const { setPhimSapChieu, setPhimDangChieu, setAllFilm } =
  ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;
