import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/Store";
import MilkContainer from "./components/MilkContainer";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer />
        <MilkContainer />
        <hr />
        <UsersList />
      </Provider>
    </div>
  );
}

export default App;
