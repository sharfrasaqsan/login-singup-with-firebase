import { Link, useNavigate } from "react-router-dom";
import "../styles.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = ({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Register successfull.");
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <br />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
