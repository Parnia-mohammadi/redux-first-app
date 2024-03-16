import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy_milk } from "../features/milk/milkSlice";
// import { buyMilk } from "../redux/milk/milkActions";

function MilkContainer() {
  const [value, setValue] = useState(0);
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Milk number : {milk.numOfMilks}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button onClick={() => dispatch(buyMilk(value))}>Buy cake</button> */}
      <button onClick={() => dispatch(buy_milk(value))}>Buy cake</button>
    </div>
  );
}

export default MilkContainer;
