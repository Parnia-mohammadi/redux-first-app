import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../features/cake/cakeSlice";

function CakeContainer() {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Cake number : {state.numOfCakes}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button onClick={() => dispatch({ type: "Buy_Cake", payload: value })}>Buy cake</button> */}
      <button onClick={() => dispatch(buyCake(value))}>Buy cake</button>
    </div>
  );
}

export default CakeContainer;
