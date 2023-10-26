import React from "react";
import useDropMenu from "../store";

export const CalculateElem = ({ id, category, keyT, name, value }) => { //
  const { removeElemInSearch } = useDropMenu(({ removeElemInSearch }) => ({
    removeElemInSearch,
  }));


  return (
    <div className="calculate-g">
      <div className="calculate-c">
        <p>{name}</p>
        <button onClick={() => removeElemInSearch(id)}>X</button>
      </div>
     {keyT && <div className="calculate-c">
        <p>{keyT}</p>
      </div>}
    </div>
  );
};
