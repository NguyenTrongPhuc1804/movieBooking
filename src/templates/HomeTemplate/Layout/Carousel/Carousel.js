import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { getBanner } from "../../../../redux/reducer/CarouselSlice";
import { getListFilm } from "../../../../redux/reducer/ManagementFilmSlice";

function Carousel() {
  const { arrImg } = useSelector((state) => state.CaurouselSlice);
  const dispatch = useDispatch((state) => state.CaurouselSlice);
  useEffect(() => {
    dispatch(getBanner());
  }, []);
  return (
    <div className="pt-28 ">
      <Swiper
        // navigation={true}
        breakpoints={{
          200: {
            navigation: false,
          },
          640: {
            navigation: true,
          },
        }}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        spaceBetween={30}
        speed={1300}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay, Grid, EffectFade]}
        className="mySwiper "
      >
        {arrImg.map((img, idx) => (
          <SwiperSlide
            className="  "
            key={idx}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              padding: "0 10px",

              // backgroundSize: "contain",
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundImage: `url(${img.hinhAnh})`,
            }}
          >
            <img
              className="mx-auto rounded-lg h-[350px] sm:h-[600px]  w-full"
              src={img.hinhAnh}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
