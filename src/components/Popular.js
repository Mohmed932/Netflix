import { useDispatch, useSelector } from "react-redux";
import { Popular } from "../redux/getPopular";
import React, { Fragment, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { Link } from "react-router-dom";
import { Pagination } from "swiper";

const baseURL = "https://image.tmdb.org/t/p/original/";
const popular = () => {
  const dispath = useDispatch();
  const { move } = useSelector((state) => state.getPopular);
  useEffect(() => {
    dispath(Popular());
  }, [dispath]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Fragment>
      <h1 className="title" style={{ marginTop: "80px" }}>
        Top Popular
      </h1>
      <Swiper watchSlidesProgress={true} slidesPerView={5}>
        {move.map(({ poster_path, title, id }) => (
          <SwiperSlide className="item" key={id}>
            <Link to={`/move/${id}`}>
              <img src={`${baseURL}${poster_path}`} alt={title} onClick={toTop}/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};
export default popular;
