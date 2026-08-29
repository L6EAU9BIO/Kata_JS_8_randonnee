import { useState } from "react";

function Entete() {
    const [count,setCount] = useState(0)

    return (
       <>

       <h1 className="titre">Randonnées</h1>
       <p className="intro">Liste des randonées</p>
       
       </> 
        
    )

}

export default Entete