import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../../helpers";


const initialUser = { password: "", email: "" };

const Login = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";
    const url = `http://localhost:1337/api/user-applications`;
    try {
      const { data } = await axios.get(url);
      console.log(data);
      if (user.email == data.attributes.email && user.password == data.attributes.password) {
        storeUser(data);
        alert("Success!");
        setUser(initialUser);
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
      // if (user.email && user.password) {
      //   const { data } = await axios.post(url,{
      //     data: user
      //   });
      //   console.log(data.jwt);
      //   if (data.jwt) {
      //     storeUser(data);
      //     alert("Succes!");
      //     setUser(initialUser);
      //     navigate("/");
      //   }
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <div sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Login:</h2>
          <div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <button color="primary" onClick={handleLogin}>
            Login
          </button>
          <h6>
            Click <Link to="/registration">Here</Link> to sign up
          </h6>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
