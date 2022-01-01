import Header from "../../components/Header";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="bg-gray-50 w-[80%] md:w-[40%] rounded-lg p-4 flex flex-col items-center ">
          <h1 className="text-xl my-4">Create your account</h1>
          <input
            type="text"
            className="p-4 rounded-lg mt-4 w-full"
            placeholder="Username"
          />
          <input
            type="email"
            className="p-4 rounded-lg mt-4 w-full"
            placeholder="Email"
          />
          <input
            type="password"
            className="p-4 rounded-lg mt-4 w-full"
            placeholder="Password"
          />
          <input
            type="password"
            className="p-4 mt-4 w-full rounded-lg"
            placeholder="confirm your password"
          />
          <button className="btn-contained mt-4 w-full uppercase mb-4 ">
            Create account
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
