import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/Store";
import MilkContainer from "./components/MilkContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <MilkContainer />
      </Provider>
    </div>
  );
}

export default App;
