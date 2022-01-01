import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { produce } from "immer";
import { registerUser } from "../../store/actions/authActions";
import { useRouter } from "next/router";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "client",
  });
  const dispatch = useDispatch();
  const router = useRouter();

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
      const { data } = await dispatch(registerUser(userData, router));
      console.log(data);

      setUserData({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        role: "client",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-gray-50 w-[80%] md:w-[40%] rounded-lg p-4 flex flex-col items-center ">
          <h1 className="text-xl my-4">Create your account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-4 rounded-lg mt-4 w-full"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={userData.username}
            />
            <input
              type="email"
              className="p-4 rounded-lg mt-4 w-full"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
            <input
              type="password"
              className="p-4 rounded-lg mt-4 w-full"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={userData.password}
            />
            <input
              type="password"
              className="p-4 mt-4 w-full rounded-lg"
              placeholder="confirm your password"
              name="cpassword"
              onChange={handleChange}
              value={userData.cpassword}
            />
            <button
              type="submit"
              className="btn-contained mt-4 w-full uppercase mb-4 "
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
