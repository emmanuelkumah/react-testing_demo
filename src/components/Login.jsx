//import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [loading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      setIsLoading(true);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userData);

  return (
    <div className="container">
      <h2>Login Component Testing</h2>
      <h2>{userData.title}</h2>

      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button disabled={!username && !password} onClick={handleFormSubmit}>
          {!loading ? "click me" : "loading.."}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong
        </span>
      </form>
    </div>
  );
};

export default Login;
