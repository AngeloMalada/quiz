import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" bg-transparent h-[10vh] items-center flex flex-row justify-between  font-bold uppercase fixed top-0 w-full px-10">
      <div>
        <span>LOGO</span>
      </div>
      <div className="gap-10 flex flex-row ">
        <span>Login</span>
        <span>Register</span>
        <span>Profile</span>
      </div>
    </div>
  );
}

export default Navbar;
