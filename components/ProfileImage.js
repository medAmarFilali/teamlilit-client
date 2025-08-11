import Image from "next/image";

const ProfileImage = ({ profileImage }) => {
  return (
    <Image
      src={profileImage}
      alt="Profile image"
      className="w-full h-full rounded-full object-cover"
      width={128}
      height={128}
    />
  );
};

export default ProfileImage;
