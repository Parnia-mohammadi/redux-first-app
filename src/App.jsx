import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import MilkContainer from "./components/MilkContainer";
import store from "./features/store";
import UsersList from "./components/UsersList";
// import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
