import React from "react";
// import house from '../assets/img/house.svg'
import umbrella from "../assets/img/umbrella.gif";
import logo from "../assets/img/logo.webp";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="wrapper">
        <div className="card bg-[#000] p-[40px] rounded-[15px] md:w-2/3 flex justify-between items-center gap-[40px] md:flex-row flex-col">
          <div className="md:w-1/2 h-full bg-[#4f5764] p-[40px] rounded-[15px] flex justify-center items-center">
            <img src={umbrella} className="w-2/3" alt="" />
          </div>
          <div className="md:w-1/2 h-full p-[40px] rounded-[15px] flex justify-center items-center">
            <img src={logo} className="w-[100px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
