import React from "react";
import "./styles.css";
import { useState } from "react";

const songs = {
  Happy Hour: [
    { name: "Kya mujhe pyaar hai", singer: "k.k" },
    { name: "Buddhu sa mann", singer: "Arman malik" },
    { name: "tum hi ho bandu", singer: "kavita seth" },
  ],

  Love Hour: [
    {
      name: "Yun hi",
      singer: "Mohit chauhan"
    },
    {
      name: "Thodi der",
      singer: "Farhan & Shreya"
    },
    {
      name: "Darkhaast",
      singer: "Arijit & Sunidhi"
    }
  ],
  Gloomy Hour: [
    {
      name: "Dil ibaadat",
      singer: "K.K"
    },
    {
      name: "Mann mera",
      singer: "Gajendra verma"
    },
    {
      name: "Never be the same",
      singer: "Camila  cabello"
    }
  ],
  Travelling Hour: [
    {
      name: "Dil chahta hai",
      singer: "Shankar ehsan loy"
    },
    {
      name: "Allah hafiz",
      singer: "K.K"
    },
    {
      name: "Aao milo chale",
      singer: "Shaan"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("happy hour");
  const [selectedsong, setSelectedsong] = useState("selected");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Songs Suggestion</h1>
      <h4>Checkout my favorite songs.Select a Genre to get Started</h4>
      <div>
        {Object.keys(songs).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            className={genre === selectedGenre && selectedsong}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr
        style={{
          width: "50%",
          height: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "blue"
        }}
      />
      <div style={{ textAlign: "left" }} className="container container-center">
        <ul style={{ paddingInlineStart: "0" }}>
          {songs[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                color: "white",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: "#4E4E50"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {singer.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}