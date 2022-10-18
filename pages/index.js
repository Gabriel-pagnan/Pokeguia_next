import styles from '../styles/Home.module.css'
import Card from '../components/Card';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

export async function getStaticProps() {
  const numPokemon = 905;

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const response = await fetch(`${url}/?limit=${numPokemon}`);
  const data = await response.json();

  data.results.forEach((item, index) => {
    item.id = index+1
  })

  return{
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({pokemons}) {
  

  return (
    <>
      <Navbar />
      <div id="home" className={styles.container}>
        <div className={styles.container_pokemon}>
          {pokemons.map((pokemon)=>(
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
      <Footer />
    </>
    
  )
}
