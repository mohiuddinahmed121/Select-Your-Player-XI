import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
   const playersData = use(playersPromise);
   console.log(playersData);
   return <div>lksdjflskjdf</div>;
};

export default AvailablePlayers;
