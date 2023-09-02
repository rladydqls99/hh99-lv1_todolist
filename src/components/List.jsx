import React from "react";
import Item from "./Item";

function List({
  title,
  inputs,
  clickRemoveButtonHandler,
  clickChangeStateButtonHandler,
}) {
  return (
    <>
      <h3 className={title === "Working" ? "Working" : "Done"}>
        {title}..{title === "Working" ? "🔥" : "🎉"}
      </h3>
      <div className="Todo">
        {inputs.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
              clickChangeStateButtonHandler={clickChangeStateButtonHandler}
            />
          );
        })}
      </div>
    </>
  );
}

export default List;
