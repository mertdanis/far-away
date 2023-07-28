import React, { useContext } from "react";
import { MainContext } from "../context/context";

function Stats() {
  //context
  const { data } = useContext(MainContext);

  if (data.length === 0) {
    return (
      <div className="container-stats">
        <p>Start adding some items to your packing list!</p>
      </div>
    );
  }

  //states

  const dataLength = data.length;
  const dataDone = data.filter((numberDone) => {
    return numberDone.done;
  }).length;
  const dataPercentage = Math.round((dataDone / dataLength) * 100);

  return (
    <div className="container-stats">
      {dataPercentage === 100 ? (
        <p>You are ready to go!</p>
      ) : (
        `You have ${dataLength} items on your list, and you already packed ${dataDone} (%${dataPercentage})`
      )}
    </div>
  );
}

export default Stats;
