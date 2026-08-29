import CarteRando from "./CarteRando";

function ListeRandos({randonnees}) {
    
    return (
        <>
            <section className="liste_randos">
                {randonnees.map((randonnee) => (
                    <CarteRando key={randonnee.id} randonnee = {randonnee}/>
                ))}
            </section>
        </>
    )

}

export default ListeRandos