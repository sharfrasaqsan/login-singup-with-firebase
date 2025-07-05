import { useNavigate } from "react-router-dom";
import "../styles.css";

const Home = ({ setisLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setisLoggedIn(false);
    alert("Account Logout Successfully.");
    navigate("/");
  };

  return (
    <div className="home-container">
      <h1>Welcome to the App</h1>
      <p>Please login or register to continue.</p>
      <br />
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
