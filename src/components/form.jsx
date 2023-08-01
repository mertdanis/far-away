import React, { useState, useContext, useEffect, useRef } from "react";
import { MainContext } from "../context/context";

function Form() {
  // context
  const {
    number,
    setNumber,
    value,
    setValue,
    content,
    setContent,
    data,
    setData,
    index,
    setIndex,
  } = useContext(MainContext);

  // reset
  const clearAfterAdd = () => {
    setValue("");
    setNumber(1);
  };

  // functions for adding data

  const addData = () => {
    setData([
      ...data,
      { id: index, value: value, number: number, done: false },
    ]);
    clearAfterAdd();
  };

  const handleClick = () => {
    setIndex((index) => index + 1);

    if (value !== "") {
      addData();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && value !== "") {
      addData();
      setIndex((index) => index + 1);
    }
  };

  return (
    <div className="container-form">
      <p>What do you need for your trip? ✈️</p>
      <select
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        name="cars"
        id="cars"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <input
        type="text"
        placeholder="item..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <i class="fa-solid fa-plus" onClick={handleClick}></i>
    </div>
  );
}

export default Form;
