import Header from "../../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center ">
        <div className="bg-gray-50 w-[80%] md:w-[40%] rounded-lg  p-4 flex items-center flex-col  ">
          <h1 className="text-xl my-4">Account Login</h1>
          <input
            type="text"
            className="p-4 rounded-lg mt-4 w-full "
            placeholder="Login"
          />
          <input
            type="password"
            className="p-4 rounded-lg mt-4 w-full"
            placeholder="Password"
          />
          <button className="btn-contained mt-4 w-full uppercase mb-4 ">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
