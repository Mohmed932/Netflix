import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleMove.css";

const baseURL = "https://image.tmdb.org/t/p/original/";
const APIKEY = "6a206896c77601cb87ebc0c81d2c9ddf";
const SingleMove = () => {
  const [move, setmove] = useState([]);
  const [video, setvideo] = useState();
  const id = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${id.id}?api_key=${APIKEY}&append_to_response=videos,images`;
  useEffect(() => {
    const fetching = async () => {
      try {
        const req = await fetch(URL);
        const res = await req.json();
        setvideo(res.videos.results[0].key);
        return setmove(res);
      } catch (error) {
        return console.log(error.message);
      }
    };
    fetching();
  }, [id]);

  return (
    <div className="SingleMove">
      <div className="SingleMove-image">
        <img src={`${baseURL}${move.backdrop_path}`} />
      </div>
      <div className="SingleMove-desc">
        <div className="SingleMove-word">
          <h1>{move.original_title}</h1>
          <p>{move.overview}</p>
          <h3>release Date:{move.release_date}</h3>
          <h3>Vote Average:{move.vote_average}</h3>
        </div>
        <div className="SingleMove-minImg">
          <img src={`${baseURL}${move.poster_path}`} />
        </div>
      </div>
      <div className="SingleMove-videos">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube-nocookie.com/embed/${video}?start=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default SingleMove;
