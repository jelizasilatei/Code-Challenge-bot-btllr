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

    return (
        <div>
            <BotCollection bots={bots} />
        </div>
    )
    
}

export default BotsPage;