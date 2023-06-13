import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-2 pt-[13px]">
      <div>
        <button className="text-xl font-[600] text-[#F65858] mt-1">
          SocietalServe☀️
        </button>
      </div>
      <div className="flex text-xl gap-4 login">
        <button className="hidden md:block ">Register your NGO</button>
        <a href="/login">
          <button className="hover:text-[#576CBC] btn">login</button>
        </a>
        <a href="/signup">
          <button className="bg-[#576CBC] btn rounded-xl text-white">
            signup
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
