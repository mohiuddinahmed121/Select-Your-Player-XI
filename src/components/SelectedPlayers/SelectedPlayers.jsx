import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ selectedPlayers, removePlayer }) => {
   return (
      <div className="max-w-[1200px] mx-auto mt-3">
         {selectedPlayers.map((player) => (
            <SelectedCard
               player={player}
               key={player.id}
               removePlayer={removePlayer}
            ></SelectedCard>
         ))}
      </div>
   );
};

export default SelectedPlayers;
