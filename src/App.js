import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Register from "./components/Register";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home setisLoggedIn={setisLoggedIn} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setisLoggedIn={setisLoggedIn}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              userName={userName}
              setUserName={setUserName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
