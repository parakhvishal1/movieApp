import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [movieData, setMovieData] = useState("")
  const [movieName, setMovieName] = useState("star_wars")
  const getMovieData = async () => {
    const response = await axios.get("https://www.omdbapi.com/?s=" + movieName + "&apikey=2d753e6d")
    if (response && response.data.Response == "True") {
      setMovieData(response.data.Search)
    }
  }
  useEffect(() => {
    getMovieData()
  }, [movieName])

  const buttonStyle = {
    width: "86px",
    height: "31px",
    marginRight: "15px",
    cursor: "pointer"
  }
  return (
    <div className="App">
      <header className="App-header">
        {
          movieData && movieData.length ?
            <div style={{ display: "inline-flex", background: "#282c34" }}>
              {
                movieData.map((o) => (
                  <div style={{ margin: "0px 20px 0px 20px" }}>
                    <p><label>Title : </label><span>{o.Title}</span></p>
                    <p><label>Year : </label><span>{o.Year}</span></p>
                    <p><label>imdbID : </label><span>{o.imdbID}</span></p>
                    <p><label>Poster : </label><img src={o.Poster} /></p>
                  </div>
                ))
              }
            </div>

            : ""
        }
        <div style={{ display: "inline-block" }}>
          <button style={buttonStyle} onClick={() => setMovieName("star_wars")}>Star Wars</button>
          <button style={buttonStyle} onClick={() => setMovieName("iron_man")}>Iron Man</button>
          <button style={buttonStyle} onClick={() => setMovieName("star_wars")}>Star Wars</button>
        </div>


        {/* <pre id="myText" >
        {JSON.stringify(movieData, null, 4)}
      </pre> */}

      </header>
    </div>
  );
}

export default App;
