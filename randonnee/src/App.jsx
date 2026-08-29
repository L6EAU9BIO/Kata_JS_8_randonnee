import './App.css'
import Entete from './Entete.jsx'
import randonnees from './randonnees.json';
import ListeRandos from './ListeRandos.jsx';


function App() {

  return (
      <>

        <Entete />
        <ListeRandos randonnees={randonnees}/>

      </>  
  )
}

export default App
