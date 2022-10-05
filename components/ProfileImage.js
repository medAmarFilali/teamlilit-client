const ProfileImage = ({ profileImage }) => {
  return (
    <img
      src={profileImage}
      alt=""
      className="w-full h-full rounded-full object-cover"
    />
  );
};

export default ProfileImage;
