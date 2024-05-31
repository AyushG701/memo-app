import React from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
const Navbar = () => {
  let [searchQuery, setSearchQuery] = useState("");

  let userInfo = {
    fullName: "John",
    Bio: "I am a developer",
    ProfilePic: "https://www.w3schools.com/howto/img_avatar.png",
  };
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };
  const handleSearch = () => {
    console.log("handle Search");
  };
  const onClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">Memo</h2>
      <SearchBar
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
