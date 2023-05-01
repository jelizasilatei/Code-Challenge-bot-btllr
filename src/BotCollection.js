import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots}) {

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

export default BotCollection;