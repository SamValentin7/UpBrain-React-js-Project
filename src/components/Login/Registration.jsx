import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialUser = { email: "", password: "", username: "" };
const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const [comments, setComments] = useState([]);
  const auth = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";


  useEffect(() => {
      fetchComments();
  }, []);

  const fetchComments = async () => {
      axios.defaults.headers.common['Authorization'] = auth;
      try {
          const response = await axios.get('http://localhost:1337/api/user-applications');
          setComments(response.data.data);
          console.log(response);
      } catch (error) {
          console.error('Error fetching comments:', error);
      }
  };

  const signUp = async () => {
    try {
      axios.defaults.headers.common['Authorization'] = "Bearer b004889acd3ef39f3911f1949f7c2db9e2940b36d807ae50976d005a914ca2325044959365e0f9f37c9e185685cf04b4aaedb99c532bb0a305a93b0d118df2011664113e5994b96aa76c5d2899873d6a8d84273acf29198e7414df4a43fe0c3ce105562f96fca6425835bf593bf1900c787434e43bf873f2827f80d805cc6a91";
      const url = `http://localhost:1337/api/user-applications`;
      console.log(user);
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, {
          data: user
        });
        console.log(res);
        if (!!res) {
          alert("Succes!");
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className="register">
      <div sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Sign up:</h2>
          <div>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />
          </div>
          <button color="primary" onClick={signUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
