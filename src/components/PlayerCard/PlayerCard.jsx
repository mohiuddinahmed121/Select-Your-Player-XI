import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Vector.png";
import { toast } from "react-toastify";

const PlayerCard = ({
   player,
   setAvailableBalance,
   availableBalance,
   selectedPlayers,
   setSelectedPlayers,
}) => {
   const [isSelected, setIsSelected] = useState(false);

   const handleSelect = (playerData) => {
      if (availableBalance < playerData.price) {
         toast("Not enough balance");
         return;
      }
      if (selectedPlayers.length === 6) {
         toast("6 players already selected!");
         return;
      }
      setIsSelected(true);
      setAvailableBalance(availableBalance - playerData.price);
      setSelectedPlayers([...selectedPlayers, playerData]);
      toast("Player selected successfully!");
   };

   return (
      <div className="card bg-base-100 shadow-sm p-4">
         <figure>
            <img className="w-full h-[300px] object-cover" src={player.player_image} alt="Shoes" />
         </figure>
         <div className="mt-4">
            <div className="flex gap-1">
               <img src={userImg} alt="User" />
               <h2 className="card-title ml-2">{player.player_name}</h2>
            </div>
            <div className="flex justify-between mt-4 border-b-1 pb-2 border-gray-400">
               <div className="flex items-center">
                  <img className="w-[20px] h-[20px]" src={flagImg} alt="Flag" />
                  <span className="ml-2">{player.player_country}</span>
               </div>
               <button className="btn">All rounder</button>
            </div>

            <div className="flex justify-between font-bold">
               <span>Rating</span>
               <span>{player.rating}</span>
            </div>
            <div className="flex justify-between mt-4">
               <span className="font-bold">{player.bating_style}</span>
               <span>{player.bowling_style}</span>
            </div>
            <div className="card-actions mt-4 flex justify-between items-center">
               <p className="font-bold">Price: ${player.price}</p>
               <button
                  disabled={isSelected}
                  onClick={() => {
                     handleSelect(player);
                  }}
                  className="btn"
               >
                  {isSelected === true ? "Selected" : "Choose player"}
               </button>
            </div>
         </div>
      </div>
   );
};

export default PlayerCard;
