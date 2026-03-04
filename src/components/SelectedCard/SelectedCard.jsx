import React from "react";
import dltbnt from "../../assets/Frame.png";

const SelectedCard = ({ player, removePlayer }) => {
   const handleRemove = () => {
      removePlayer(player);
   };

   return (
      <div className="border-2 mt-5 border-gray-300 p-3 flex justify-between items-center rounded-xl">
         <div className="flex items-center">
            <img className="h-[50px] w-[50px] rounded-xl" src={player.player_image} alt="" />
            <div className="ml-2">
               <h1 className="font-bold">{player.player_name}</h1>
               <p className="text-xs">{player.player_role}</p>
            </div>
         </div>
         <div onClick={handleRemove}>
            <img src={dltbnt} alt="Delete Button" />
         </div>
      </div>
   );
};

export default SelectedCard;
