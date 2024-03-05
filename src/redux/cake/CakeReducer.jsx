const initialState = {
  numOfCakes: 10,
};

export default function CakeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "Buy_Cake":
      return { ...state, numOfCakes: state.numOfCakes - payload };
    default:
      return state;
  }
}
