import { useDispatch, useSelector } from "react-redux";
import { Popular } from "../redux/getPopular";
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Slider.css";

const baseURL = "https://image.tmdb.org/t/p/original/";
const popular = () => {
  const dispath = useDispatch();
  const { move } = useSelector((state) => state.getPopular);
  useEffect(() => {
    dispath(Popular());
  }, [dispath]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="slider">
      <h1 className="title" style={{ marginTop: "80px" }}>
        Top Popular
      </h1>
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
export default popular;
