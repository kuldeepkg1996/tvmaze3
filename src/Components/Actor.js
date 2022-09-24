import React from "react";

function Actor(props) {
  const { actorImgSrc, actorName, gender } = props;
  return (
    <div className="outerDiv">
      {actorImgSrc ? (
        <img src={actorImgSrc} alt="no img found" />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
          alt="no img found"
        />
      )}
      <div className="infoDiv">
        <p className="infoPara">{actorName}</p>
        <p>{gender}</p>
      </div>
    </div>
  );
}

export default Actor;
