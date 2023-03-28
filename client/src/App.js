import Login from "./components/layout/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Register from "./components/layout/Register";
import { Fragment } from "react";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
          <Routes>
            <Route exact path="/dashboard" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              path="*"
              element={<Navigate to="/dashboard" replace={true} />}
            />
          </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
