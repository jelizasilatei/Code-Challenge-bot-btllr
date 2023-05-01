import React, {useEffect, useState} from "react";

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
            
        </div>
    )
    
}

export default BotsPage;