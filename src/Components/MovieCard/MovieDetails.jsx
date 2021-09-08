import React from "react";
import {useHistory} from 'react-router-dom'

function MovieDetails({ movie }) {
    let history = useHistory()
  const styles = {
    background: {
      backgroundImage: `url(${movie.posterURL})`,
      backgroundColor: "#00000070",
      filter: "brightness(0.2)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "150vw",
      position: "absolute",
    },
    child: {
      position: "relative",
      margin: "0px 10vw",
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    title: {
      textAlign: "center",
      padding: 20,
      color: "white",
    },
    rating: { color: "#ffc83d" },
    description: {
      color: "#d8d8d8",
      padding: 5,
    },
    trailer: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      margin: "10vw 0px",
    },
    video: {
      width: "100%   !important",
      height: "auto  !important",
    },
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={styles.background}></div>
      <div style={styles.child}>
        <button type="button" className="btn btn-secondary position-relative" onClick={()=>history.push('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-house"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
        </button>
        <h1 style={styles.title}>{movie.title}</h1>
        <h5 style={styles.rating}>⭐{movie.rating}</h5>
        <p style={styles.description}>{movie.description}</p>
      </div>
      <div style={styles.trailer}>
        <iframe
          width="640"
          height="480"
          title={`${movie.title} trailer`}
          src={`https://www.youtube.com/embed/${movie.trailerURL.substring(
            17
          )}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails;
