import React from "react";
import BotCard from "./BotCard";

function BotCollection({bots, handleClick, handleDelete}) {

    const displayCards = bots.map(bot => {
        return <BotCard key={bot.id} bot={bot} handleClick={handleClick} handleDelete={handleDelete} />
    })
    
    return (
        <div className = "bots-available">
            <div className = "row">
                {/* Bot Collection */}
                <h2>Bot Collection</h2>
                {displayCards}
            </div>
        </div>
    )

}

export default BotCollection;