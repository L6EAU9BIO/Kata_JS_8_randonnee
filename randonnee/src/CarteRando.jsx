import EtiquetteDifficulte from "./EtiquetteDifficulte"

function CarteRando({randonnee}) {
    

    return(
        <>
            <article className="carte_rando">
                <h2 className="titre_rando">{randonnee.nom}</h2>
                <ul className="caract">
                    <li className="diff_li">Difficulté : <EtiquetteDifficulte difficulte={randonnee.difficulte}/></li>
                    <li className="duree_li">Durée : {randonnee.duree_h} h</li>
                    <li className="deniv_li">Dénivelé : {randonnee.denivele_m} m</li>
                    <li className="region_li">Region : {randonnee.region}</li>
                    {randonnee.balisee && <li className="balisee">Balisée</li>}

                </ul>
            </article>
        
        </>

    )
}

export default CarteRando