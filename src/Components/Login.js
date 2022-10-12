import React,{useState} from "react";
import "./CSS/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "admin", password: "admin" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        navigate("/dashboard");
    } 
  };
  return (
    <div>
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h3>MKS Racing</h3>
          </div>
        </div>
        <div className="right">
          <div className="inputs">
           <form onSubmit={handleSubmit}>
           <input type="text"
             placeholder="User Name"
             name="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
             />
            <br />
            <input type="password" placeholder="Password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)} 
            required/>
             <input className="btnbutton" type="submit" value="Submit" />
           </form>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;


