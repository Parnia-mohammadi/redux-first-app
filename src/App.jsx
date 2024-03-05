import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
      </Provider>
    </div>
  );
}

export default App;
