import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import withAuth from "../../hoc/widthAuth";
import { getProfile, updateProfile } from "../../store/actions/userActions";

const Settings = () => {
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const profileInfo = useSelector((state) => state.user);
  const imageInputRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    setFamilyName(profileInfo.familyName);
    setGivenName(profileInfo.givenName);
  }, [profileInfo]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const imageFile = URL.createObjectURL(e.target.files[0]);
      setProfileImage(imageFile);
    }
  };

  const handleProfileSubmit = async () => {
    try {
      await dispatch(updateProfile({ familyName, givenName }));
    } catch (err) {
      console.log("err");
    }
  };

  const handlePasswordChange = async () => {
    console.log("Clicked!!!");
    try {
      await dispatch(getProfile());
    } catch (err) {
      console.log("err", err);
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
                {/* <UploadImage
                  profileImage={profileImage}
                  imageInputRef={imageInputRef}
                  handleImageChange={handleImageChange}
                /> */}
                <div className="tm-input-group w-full md:w-[350px]">
                  <label htmlFor="familyname" className="tm-label">
                    Family name
                  </label>
                  <input
                    type="text"
                    className="tm-input"
                    id="familyname"
                    name="familyname"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
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
                    value={givenName}
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </div>
                <button
                  className="btn-contained mt-4"
                  onClick={handleProfileSubmit}
                >
                  Comfirm
                </button>
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
                <button
                  className="btn-contained mt-4"
                  onClick={handlePasswordChange}
                >
                  Update password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Settings);
