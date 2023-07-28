import React, { useContext, useState } from "react";
import { MainContext } from "../context/context";

function Packinglist() {
  //context
  const { content, data, setData, setNumber, number } = useContext(MainContext);

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

  return (
    <div className="container-packinglist">
      <div className="container-packinglist-content">
        {data.map((content) => {
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
          <select onChange={(e) => setNumber(e.target.value)}>
            <option value="inputorder">SORT BY INPUT ORDER</option>
            <option value="bydescription">SORT BY DESCRIPTION</option>
            <option value="packedstatus">SORT BY PACKED STATUS</option>
          </select>

          <button onClick={handleClear}>CLEAR LIST</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Packinglist;
