import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CardFilm from "../../components/CardFilm/CardFilm";
import Carousel from "../../templates/HomeTemplate/Layout/Carousel/Carousel";
import Footer from "../../templates/HomeTemplate/Layout/Footer/Footer";
import Header from "../../templates/HomeTemplate/Layout/Header/Header";
import HomeMenu from "./HomeMenu/HomeMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {
  getListFilm,
  setAllFilm,
  setPhimDangChieu,
  setPhimSapChieu,
} from "../../redux/reducer/ManagementFilmSlice";
import { getOPhim } from "../../redux/reducer/CarouselSlice";
function Home() {
  const dispatch = useDispatch();
  const { listFilm } = useSelector((state) => state.ManagementFilmSlice);
  const { oPhim } = useSelector((state) => state.CaurouselSlice);
  useEffect(() => {
    dispatch(getListFilm("asd"));
  }, []);
  const renderFilm = () =>
    listFilm.map((item, index) => (
      <SwiperSlide key={index}>
        <CardFilm film={item} />
      </SwiperSlide>
    ));
  return (
    <div className="bg-[#3f3f3f]">
      <Header />
      <Carousel />
      <div className="text-center mt-6 w-full">
        <button
          onClick={() => {
            dispatch(setAllFilm());
          }}
          className="p-2 m-2 lg:px-4 md:mx-2 border border-solid border-indigo-600 focus:bg-indigo-600 text-white rounded bg-current-indigo-600"
        >
          Tất cả phim
        </button>
        <button
          onClick={() => {
            dispatch(setPhimSapChieu());
          }}
          className="p-2 m-2 lg:px-4 md:mx-2 border border-solid border-indigo-600 focus:bg-indigo-600 text-white rounded bg-current-indigo-600"
        >
          Phim sắp chiếu
        </button>
        <button
          onClick={() => {
            dispatch(setPhimDangChieu());
          }}
          className="p-2 m-2 focus:bg-indigo-600 lg:px-4 md:mx-2 text-white text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
        >
          Phim đang chiếu
        </button>
      </div>
      <button></button>
      <Swiper
        style={{
          width: "80%",
          padding: "25px",
        }}
        slidesPerView={4}
        breakpoints={{
          200: {
            centeredSlides: false,
            slidesPerView: 1.2,
            grid: {
              rows: 3,
              fill: "row",
            },
          },
          640: {
            slidesPerView: 2.2,
          },
          769: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 4.2,
          },
        }}
        grid={{
          rows: 2,
          fill: "row",
        }}
        speed={800}
        // centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        // navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Grid, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {renderFilm()}
      </Swiper>

      <HomeMenu />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
