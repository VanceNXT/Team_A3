import React from "react";
import "./CardsList.css";
import CardItem from "./CardItem";
const CardsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Courses</h2>;
  }
  return (
    <div className="Cardcontainer">
      <div className="grid">
        {props.items.map((card) => (
          <CardItem
            key={card.id}
            id={card.id}
            img={card.img}
            title={card.title}
            src={card.src}
            info={card.info}
          ></CardItem>
        ))}
      </div>
    </div>
  );
};
export default CardsList;
