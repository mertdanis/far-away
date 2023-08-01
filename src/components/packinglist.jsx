import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/context";

function Packinglist() {
  // states

  const [sort, setSort] = useState("input");

  //context
  const { data, setData } = useContext(MainContext);

  //reset
  const handleClear = () => {
    setData([]);
  };

  // function
  const handleToggleClick = (id) => {
    const updateState = data.map((obj) => {
      if (obj.id === id) {
        return { ...obj, done: !obj.done };
      }

      return obj;
    });

    setData(updateState);
  };

  let sortedItems;

  const sortData = () => {
    if (sort === "description") {
      sortedItems = data.slice().sort((a, b) => a.value.localeCompare(b.value));
    }
    if (sort === "packed") {
      sortedItems = data
        .slice()
        .sort((a, b) => Number(a.done) - Number(b.done));
    }
    if (sort === "input") {
      sortedItems = data;
    }
  };

  sortData();

  return (
    <div className="container-packinglist">
      <div className="container-packinglist-content">
        {sortedItems.map((content) => {
          return (
            <div key={content.id}>
              <div className="container-packinglist-content-div">
                <input
                  type="checkbox"
                  className="container-packinglist-content-div-checkbox"
                  onChange={() => handleToggleClick(content.id)}
                ></input>

                <span
                  style={content.done ? { textDecoration: "line-through" } : {}}
                >
                  {content.number} {content.value}
                </span>

                <p
                  className="container-packinglist-content-div-times"
                  onClick={(e) => {
                    const filtered = data.filter((value) => {
                      return content.id !== value.id;
                    });
                    setData(filtered);
                  }}
                >
                  &times;
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {data.length > 0 ? (
        <div className="container-packinglist-sort">
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              value={sort}
            >
              <option value="input">SORT BY INPUT ORDER</option>
              <option value="description">SORT BY DESCRIPTION</option>
              <option value="packed">SORT BY PACKED STATUS</option>
            </select>
          </div>

          <div>
            <button onClick={handleClear}>CLEAR LIST</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Packinglist;
