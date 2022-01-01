import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { produce } from "immer";
import { loginUser } from "../../store/actions/authActions";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData(
      produce((draft) => {
        draft[e.target.name] = e.target.value;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await dispatch(loginUser(userData));
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
        <div className="bg-gray-50 w-[80%] md:w-[40%] rounded-lg  p-4 flex items-center flex-col  ">
          <h1 className="text-xl my-4">Account Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="p-4 rounded-lg mt-4 w-full "
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="p-4 rounded-lg mt-4 w-full"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn-contained mt-4 w-full uppercase mb-4 "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
