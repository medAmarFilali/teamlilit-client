import ProfileImage from "./ProfileImage";

const UploadImage = ({ profileImage, imageInputRef, handleImageChange }) => {
  return (
    <div>
      {/* upload profile picture */}
      <div className="mt-4">
        <h1 className="text-sm text-gray-600">Profile Picture</h1>
        <div className="mt-2">
          <div className="relative w-20 h-20">
            {profileImage ? (
              <ProfileImage profileImage={profileImage} />
            ) : (
              <ProfileImage profileImage="../profileimage.jpg" />
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
  );
};

export default UploadImage;
