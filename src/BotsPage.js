import React, {useEffect, useState} from "react";
import BotCollection from "./BotCollection";

function BotsPage(){
    // Step one code
    const [bots,setBots] = useState([])

    // Fetch data
    useEffect(() => {
        fetch("http://localhost:3000/bots")
        .then(res => res.json())
        .then(data => setBots(data))
    },[])

    const updateBot = (id) => {
        {setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:true} : bot))
    }}

    // const removeBot = (id) => {
    //     {setBots(bots.map(bot => id === bot.id ? {...bot, isAdded:false} : bot))
    // }}

    const deleteBot = (id) => {
        fetch(`http://localhost:3000/bots/${id}`, {
            method: "DELETE"
        }).then(() => setBots ((previousData) => previousData.filter(bot => bot.id !== id)))
    }

    return (
        <div>
            <BotCollection bots={bots} handleClick={updateBot} handleDelete={deleteBot} />
        </div>
    )
    
}

export default BotsPage;