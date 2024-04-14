import Image from "next/image";
import React from "react";

type Props = {};

const Card = () => {
  return (
    <div>
        <div className="bg-red-500 w-96 h-96 rounded-lg m-8 p-4 text-white">
            <h1 className="text-2xl font-semibold">Unlock Your Potential: Ask AI, Your Personalized Learning Assistant</h1>
            <p className="text-lg">This is a card component</p>
        </div>
    </div>
  );
};
export default Card;
