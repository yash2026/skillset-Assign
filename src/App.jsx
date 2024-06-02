import { Provider } from "react-redux";
import Login from "./components/Login";
import store from "./app/store";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import UserSkills from "./components/UserSkills";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<PrivateRoute element={Home} />} />
          <Route
            path="/user-skills"
            element={<PrivateRoute element={UserSkills} />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
