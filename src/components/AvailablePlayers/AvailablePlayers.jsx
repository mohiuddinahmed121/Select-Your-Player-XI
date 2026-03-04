import React, { use } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Vector.png";

const AvailablePlayers = ({ playersPromise }) => {
   const playersData = use(playersPromise);
   console.log(playersData);
   return (
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-4">
         {playersData.map((player) => (
            <div className="card bg-base-100 shadow-sm p-4">
               <figure>
                  <img
                     className="w-full h-[300px] object-cover"
                     src={player.player_image}
                     alt="Shoes"
                  />
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
                     <button className="btn">Choose player</button>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default AvailablePlayers;
