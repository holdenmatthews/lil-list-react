import React from "react";
import './item.css'

const Item = (props) => {

  return (
    <div className="item">
      <div>{props.item}</div>
      <button onClick={() => props.deleteFunction(props.index)}>X</button>
    </div> 
  );
};

export default Item;
