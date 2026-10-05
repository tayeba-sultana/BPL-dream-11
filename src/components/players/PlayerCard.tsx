import { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/player';
import { FaUser, FaGlobe, FaBaseballBall } from 'react-icons/fa';
import { MdSportsCricket } from 'react-icons/md';
import { Bounce, toast } from 'react-toastify';

interface IPlayerCardProps {
    player: Iplayer;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>;
    selectedPlayers: Iplayer[];
   setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>
}

const PlayerCard = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerCardProps) => {

    const [isSelected, setIsSelected] = useState(false);
    console.log(isSelected, setIsSelected, "isSelected, setIsSelected");

    console.log(coin, setCoin, 'from card')

    const handleSelectPlayer = () => {
        setIsSelected(true);

        const newCoinPrice = coin - player.price;

        if (newCoinPrice >= 0) {
            setCoin(newCoinPrice);
            //toast.success(`${player.playerName} is purchased successfully`)
            toast.success(`${player.playerName} is purchased successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            toast.error("Coin is not enough to purchase");
        }

        //Selected Players Logic
        setSelectedPlayers([...selectedPlayers, player]);
    }

    return (
        <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Player Image */}
            <div className="relative h-64 overflow-hidden bg-base-200">
                <img
                    src={player.playerImg}
                    alt={player.playerName}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Player Type */}
                <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-content shadow-lg">
                        {player.playerType}
                    </span>
                </div>

                {/* Player Name */}
                <div className="absolute bottom-4 left-4 text-white">
                    <div className="mb-1 flex items-center gap-2 text-sm opacity-90">
                        <FaUser />
                        <span>Player</span>
                    </div>

                    <h2 className="text-2xl font-bold">
                        {player.playerName}
                    </h2>
                </div>
            </div>

            {/* Card Body */}
            <div className="space-y-5 p-5">
                {/* Origin */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-base-content/60">
                        <FaGlobe />
                        <span>Origin</span>
                    </div>

                    <p className="font-semibold">{player.origin}</p>
                </div>

                <div className="divider my-0" />

                {/* Playing Styles */}
                <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-base-content/50">
                        Playing Style
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {/* Batting */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs text-base-content/50">
                                <MdSportsCricket className="text-primary" />
                                Batting
                            </div>

                            <p className="text-sm font-semibold">
                                {player.battingStyle}
                            </p>
                        </div>

                        {/* Bowling */}
                        <div className="rounded-xl bg-base-200 p-3">
                            <div className="mb-1 flex items-center gap-2 text-xs text-base-content/50">
                                <FaBaseballBall className="text-primary" />
                                Bowling
                            </div>

                            <p className="text-sm font-semibold">
                                {player.bowlingStyle}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divider my-0" />

                {/* Price + Button */}
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                            Price
                        </p>

                        <h2 className="text-2xl font-extrabold text-primary">
                            ${player.price.toLocaleString()}
                        </h2>
                    </div>

                    <button
                        onClick={() => handleSelectPlayer()}
                        className={`btn btn-primary rounded-xl px-5 shadow-md transition-all hover:scale-105`}
                        disabled={isSelected}>
                        {isSelected === true ? "Selected" : "Choose Player"}
                        {/* disabled={isSelected === true ? "Selected" : "Choose Player" } */}
                        {/* disabled={isSelected ? "Selected" : "Choose Player" } */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;