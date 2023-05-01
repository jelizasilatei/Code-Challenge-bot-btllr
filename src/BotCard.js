import React from "react";

const botTypeClasses  = {
    Assault: "icon military",
    Defender: "icon shield",
    Support: "icon plus circle",
    Medic: "icon ambulance",
    Witch: "icon magic",
    Captain: "icon star"
};

fucntion BotCard({bot}) {
    return (
        <div className="ui column">
            <div className="ui card" key={bot.id} onClick={} >
            </div>
            <div className="image">
                <img alt="oh no!" src={bot.avatar_url} />
            </div>
            <div className="content">
                <div className="header">
                    {bot.name}
                    <i className={botTypeClasses[bot.bot_class]} />
                </div>
                <div className="text-wrap">
                    <small>{bot.catchphrase}</small>
                </div>
            </div>
            <div className="extra-content">
                <span>
                    <i className="icon heartbeat" />
                    {bot.health}
                </span>
                <span>
                    <i className="icon lightning" />
                    {bot.damage}
                </span>
                <span>
                    <i className="icon shield"/>
                    {bot.armor}
                </span>
                <span>
                    <div className="segment-basic">
                        <button 
                        className="mini-button" 
                        onClick={(e) => 
                            {e.stopPropagation()
                            handleDelete(bot.id)
                            }}>
                                X
                            </button>
                    </div>
                </span>
            </div>
        </div>
    )
}

export default BotCard;