import React from "react";
import "./style.css";

function ClickyCard(props) {
  return (
    <div onClick={() => props.clickCount(props.id)} className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.removeClicky(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ClickyCard;
