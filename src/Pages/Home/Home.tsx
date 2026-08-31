import './Home.css';

import Hero from "../../components/Hero/Hero";
import Name from "../../components/Name/Name";

interface HomeProps {
  setFilter: (filter: string) => void;
}

export default function Home({ setFilter }: HomeProps) {
  return (
    <main>
        <div id="Home" className="Home-container">
            <Name />
            <Hero setFilter={setFilter} /> 
        </div>
          
    </main>
    
  );
}