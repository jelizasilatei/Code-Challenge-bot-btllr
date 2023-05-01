import React from "react";
import BotCard from "./BotCard";

function BotsAvailable({bots}) {

    const displayCards = bots.map(bot => {
        return <BotCard key={bot.id} bot={bot} />
    })
    
    return (
        <div className = "bots-available">
            <div className = "row">
                {displayCards}
            </div>
        </div>
    )

}

export default BotsAvailable;