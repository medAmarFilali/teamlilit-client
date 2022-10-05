import { useState, useRef } from "react";
import Header from "../../components/Header";
import withAuth from "../../hoc/widthAuth";

const Settings = () => {
  const [profileImage, setProfileImage] = useState("");
  const imageInputRef = useRef();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const imageFile = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageFile);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="h-[calc(100vh-64px)] w-full flex justify-center">
          <div className="bg-gray-50 rounded-xl w-full md:w-full py-4 px-8">
            <h1 className="text-xl font-bold">Settings</h1>
            <div className="mt-4 flex">
              <div className="w-full md:w-[48%]">
                <h1 className="text-lg text-gray-600">Account</h1>
                <div>
                  {/* upload profile picture */}
                  <div className="mt-4">
                    <h1 className="text-sm text-gray-600">Profile Picture</h1>
                    <div className="mt-2">
                      <div className="relative w-20 h-20">
                        {profileImage ? (
                          <img
                            src={profileImage}
                            alt=""
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <img
                            src="../profileimage.jpg"
                            alt=""
                            className="w-full h-full rounded-full object-cover"
                          />
                        )}
                        <div className="absolute bottom-0 right-0">
                          <button
                            className="bg-white rounded-full p-1"
                            onClick={() => imageInputRef.current.click()}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        name=""
                        id=""
                        className="hidden"
                        ref={imageInputRef}
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="familyname" className="tm-label">
                    Family name
                  </label>
                  <input
                    type="text"
                    className="tm-input"
                    id="familyname"
                    name="familyname"
                  />
                </div>
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="name" className="tm-label">
                    name
                  </label>
                  <input
                    type="text"
                    className="tm-input"
                    id="name"
                    name="name"
                    autoComplete="off"
                  />
                </div>
                <button className="btn-contained mt-4">Comfirm</button>
              </div>
              <div className="w-full md:w-[48%]">
                <h1 className="text-lg text-gray-600">Password</h1>
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="oldpassword" className="tm-label">
                    Old password
                  </label>
                  <input
                    type="password"
                    className="tm-input"
                    id="oldpassword"
                    name="oldpassword"
                    autoComplete="new-password"
                  />
                </div>
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="newpassword" className="tm-label">
                    New password
                  </label>
                  <input
                    type="password"
                    className="tm-input"
                    id="newpassword"
                    name="newpassword"
                  />
                </div>
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="cnewpassword" className="tm-label">
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    className="tm-input"
                    id="cnewpassword"
                    name="cnewpassword"
                  />
                </div>
                <button className="btn-contained mt-4">Update password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Settings);
