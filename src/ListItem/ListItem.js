import React from "react";

import "./ListItem.css";

const ListItem = ({ listitems, handleDelete }) => {
  return (
    <div>
      {listitems.map((el, i) => (
        <ul class="paragraph-ul" key={el.id}>
          <li>
            {el.item}
            <button className="removeBtn" onClick={() => handleDelete(el.id)}>
              Delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};
export default ListItem;
