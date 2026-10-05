import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import PlayerCard from './PlayerCard';
import SelectedPlayerCard from "./SelectedPlayerCard";

interface ISelectedPlayersProps {
   coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }: ISelectedPlayersProps): React.ReactElement => {
    console.log(selectedPlayers, 'from selected players component');

    if(selectedPlayers.length === 0){
      return <h2 className=" font-bold text-3xl my-10 text-center text-red-500">No selected players</h2>;
    }
  return (
    <div className="grid grid-cols-1 gap-7 mt-6">
      {selectedPlayers.map((player: Iplayer, ind: number) => {
        return (
          <SelectedPlayerCard
            key={ind}
            coin={coin
            }
            setCoin={setCoin}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;