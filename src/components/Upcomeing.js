import { useDispatch, useSelector } from "react-redux";
import { Upcome } from "../redux/getUpcoming";
import React, { Fragment, useEffect } from "react";

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
    <div className="slider">
      <h1 className="title">Top Upcome</h1>
      <div className="slider-content">
        {move.map(({ poster_path, title, id }) => (
          <div className="item" key={id}>
            <Link to={`/move/${id}`}>
              <img
                src={`${baseURL}${poster_path}`}
                alt={title}
                onClick={toTop}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Upcomeing;
