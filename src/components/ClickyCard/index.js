import React from "react";
import "./style.css";

function ClickyCard(props) {
  return (
    <div onClick={() => props.clickCount(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ClickyCard;
