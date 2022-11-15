import { useDispatch, useSelector } from "react-redux";
import { Trend } from "../redux/getTrending";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original/";
const Trending = () => {
  const dispath = useDispatch();
  const { move } = useSelector((state) => state.getTrend);
  useEffect(() => {
    dispath(Trend());
  }, [dispath]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="slider">
      <h1 className="title">Top Trending</h1>
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
export default Trending;
