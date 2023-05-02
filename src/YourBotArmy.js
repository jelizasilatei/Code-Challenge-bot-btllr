import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, handleClick, handleDelete}) {
    
    const displayCards = bots.map(bot => {
        return <BotCard key={bot.id} bot={bot} handleClick={handleClick} handleDelete={handleDelete} />
    })

    return (
        <div className="your-bot-army">
            <div className="your-bot-army-grid">
                <div className="your-bot-army-row">
                    <h2>Your Bot Army</h2>
                    {displayCards}
                </div>
            </div>
        </div>
    );
}

export default YourBotArmy;