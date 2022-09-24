import React, { useEffect, useState } from "react";
import Actors from "./Actor";
import Shows from "./Shows";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function FrontPage() {
  const [input, setInput] = useState("");
  const [showData, setShowData] = useState([]);
  const [actorData, setActorData] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (select === "actor") {
      fetch(`https://api.tvmaze.com/search/people?q=${input}`)
        .then((res) => res.json())
        .then((result) => {
          setActorData(result);
        });
    } else {
      fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
        .then((res) => res.json())
        .then((result) => {
          setShowData(result);
          console.log(result);
        });
    }
  }, [input]);

  return (
    <>
      <div className="container">
        <div>
          <h1>TVmaze</h1>
          <h2>Search your favourite shows</h2>
        </div>

        <div className="inputs">
          <div className="innerInput">
            <label for="actor">
              Actor
              <input
                id="actor"
                type="radio"
                name="select"
                value="actor"
                onClick={(e) => setSelect(e.target.id)}
              />
            </label>

            <label for="shows">
              Shows
              <input
                id="shows"
                type="radio"
                name="select"
                value="actor"
                onClick={(e) => setSelect(e.target.id)}
              />
              <br />
            </label>
          </div>
          <div id="displayText">
            {!select ? (
              ""
            ) : select === "shows" ? (
              <p>Enter shows below</p>
            ) : (
              <p>Enter people below</p>
            )}
          </div>

          <input
            className="input"
            id="textInput"
            type="search"
            placeholder="eg:Friends..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div id="error" className="errorText">
          {!select
            ? ""
            : select === "shows"
            ? showData.length === 0 && input && <p> No data found</p>
            : actorData.length === 0 && input && <p> No data found</p>}
        </div>
      </div>
      <div className="imgDiv">
        {select === "shows"
          ? showData.map((item) => (
              <Shows
                showImgSrc={item?.show?.image?.original}
                showName={item?.show?.name}
                summary={item?.show?.summary}
                rating={item?.show?.rating?.average}
              />
            ))
          : actorData.map((item) => (
              <Actors
                actorImgSrc={item?.person?.image?.original}
                actorName={item?.person?.name}
                gender={item?.person?.country?.gender}
              />
            ))}
      </div>
    </>
  );
}

export default FrontPage;
