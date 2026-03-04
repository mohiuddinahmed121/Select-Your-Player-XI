import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/DoubleDollar.png";

const Navbar = () => {
   return (
      <div className="navbar max-w-[1200px] mx-auto">
         <div className="flex-1">
            <a className="text-xl">
               <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
            </a>
         </div>
         <div className="flex items-center">
            <span className="mr-1 font-bold">600000</span>
            <span className="mr-1 font-bold"> Coin</span>
            <img src={dollarImg} alt="Dollar" />
         </div>
      </div>
   );
};

export default Navbar;
