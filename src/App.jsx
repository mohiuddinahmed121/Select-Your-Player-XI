import { Suspense, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
   const res = await fetch("/players.json");
   return res.json();
};
const playersPromise = fetchPlayers();

function App() {
   const [toggle, setToggle] = useState(true);
   const [availableBalance, setAvailableBalance] = useState(10000000000);
   const [selectedPlayers, setSelectedPlayers] = useState([]);

   const removePlayer = (p) => {
      const fileterdData = selectedPlayers.filter((player) => player.id !== p.id);
      setSelectedPlayers(fileterdData);
      setAvailableBalance(availableBalance + p.price);
   };

   return (
      <>
         <Navbar availableBalance={availableBalance}></Navbar>

         <div className="max-w-[1200px] mx-auto flex justify-between items-center">
            <h1 className="font-bold text-2xl">
               {toggle === true
                  ? "Available Players"
                  : `"Selected Players (${selectedPlayers.length}/6)"`}
            </h1>

            <div className="font-bold">
               <button
                  onClick={() => setToggle(true)}
                  className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle == true ? "bg-green-500" : ""}`}
               >
                  Available
               </button>
               <button
                  onClick={() => setToggle(false)}
                  className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-r-0 ${toggle == false ? "bg-green-500" : ""}`}
               >
                  selected <span>({selectedPlayers.length})</span>
               </button>
            </div>
         </div>

         {toggle === true ? (
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
               <AvailablePlayers
                  playersPromise={playersPromise}
                  availableBalance={availableBalance}
                  setAvailableBalance={setAvailableBalance}
                  selectedPlayers={selectedPlayers}
                  setSelectedPlayers={setSelectedPlayers}
               ></AvailablePlayers>
            </Suspense>
         ) : (
            <SelectedPlayers
               removePlayer={removePlayer}
               selectedPlayers={selectedPlayers}
            ></SelectedPlayers>
         )}
         <ToastContainer />
      </>
   );
}

export default App;
