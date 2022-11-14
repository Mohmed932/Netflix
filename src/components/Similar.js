import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";

const baseURL = "https://image.tmdb.org/t/p/original/";
const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const Similar = () => {
  const [data, setData] = useState([]);
  const id = useParams();

  const URL = `https://api.themoviedb.org/3/movie/${id.id}/similar?api_key=${APIKEY}&language=en-US&page=1`;
  useEffect(() => {
    const fetching = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        return setData(res.results);
      } catch (error) {
        return console.log(error);
      }
    };
    fetching();
  }, [id.id]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="Similar">
      <h1 className="title">Similar</h1>
      <Swiper watchSlidesProgress={true} slidesPerView={5}>
        {data.map((i) => (
          <SwiperSlide className="item" key={i.id}>
            <Link to={`/move/${i.id}`}>
              <img
                src={`${baseURL}${i.poster_path}`}
                alt={i.title}
                onClick={toTop}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Similar;
