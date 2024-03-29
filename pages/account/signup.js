import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { produce } from "immer";
import { registerUser } from "../../store/actions/authActions";
import { useRouter } from "next/router";
import Loading from "../../components/layout/svg/Loading";
import MobileMenu from "../../components/layout/MobileMenu";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "client",
  });
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const mobileMenu = useSelector((state) => state.menu.mobileMenu);

  const handleChange = (e) => {
    setUserData(
      produce((draft) => {
        draft[e.target.name] = e.target.value;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
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
              {loading ? <Loading /> : "Create account"}
            </button>
          </form>
        </div>
      </div>
      {mobileMenu && <MobileMenu />}
    </>
  );
};

export default Signup;
