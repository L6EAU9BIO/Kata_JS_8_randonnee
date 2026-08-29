import EtiquetteDifficulte from "./EtiquetteDifficulte"

function CarteRando({randonnee}) {
    

    return(
        <>
            <article>
                <h2 className="titre_rando">{randonnee.nom}</h2>
                <ul>
                    <li>Difficulté : <EtiquetteDifficulte difficulte={randonnee.difficulte}/></li>
                    <li>Durée : {randonnee.duree_h} h</li>
                    <li>Dénivelé : {randonnee.denivele_m} m</li>
                    <li>Region : {randonnee.region}</li>
                    {randonnee.balisee && <li className="balisee">Balisée</li>}

                </ul>
            </article>
        
        </>

    )
}

export default CarteRando