import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CakeContainer() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cake number : {state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "Buy_Cake", payload: value })}>
        Buy cake
      </button>
    </div>
  );
}

export default CakeContainer;
