import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import store from "./features/store";
// import store from "./redux/Store";
// import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <MilkContainer />
        <hr />
        {/* <UsersList /> */}
      </Provider>
    </div>
  );
}

export default App;
