import { useState } from "react";

function Entete() {
    const [count,setCount] = useState(0)

    return (
       <>
        <header className="entete">

            <h1 className="titre">Randonnées ⚐</h1>
            <p className="intro">☯︎ En recherche d'une escapade ? L'air gris n'a plus le même goût depuis quelques temps ? Une liste de belles escapades vous est ici proposé, libre à vous de chosir selon vos besoins et envies... ☞</p>

        </header>
       
       </> 
        
    )

}

export default Entete