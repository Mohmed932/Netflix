import { useDispatch, useSelector } from "react-redux";
import { Upcome } from "../redux/getUpcoming";
import React, { Fragment, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Upcomeing = () => {
  const dispath = useDispatch();
  const { move } = useSelector((state) => state.getUpcome);
  useEffect(() => {
    dispath(Upcome());
  }, [dispath]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <h1 className="title">Top Upcome</h1>
      <Swiper watchSlidesProgress={true} slidesPerView={5}>
        {move.map(({ poster_path, title, id }) => (
          <SwiperSlide className="item" key={id}>
            <Link to={`/move/${id}`}>
              <img
                src={`${baseURL}${poster_path}`}
                alt={title}
                onClick={toTop}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};
export default Upcomeing;
