import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
   playersPromise,
   setAvailableBalance,
   availableBalance,
   selectedPlayers,
   setSelectedPlayers,
}) => {
   const playersData = use(playersPromise);
   console.log(playersData);
   return (
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
         {playersData.map((player) => (
            <PlayerCard
               key={player.id}
               player={player}
               setAvailableBalance={setAvailableBalance}
               availableBalance={availableBalance}
               selectedPlayers={selectedPlayers}
               setSelectedPlayers={setSelectedPlayers}
            ></PlayerCard>
         ))}
      </div>
   );
};

export default AvailablePlayers;
