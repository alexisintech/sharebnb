import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
        img="poetry-picnic.jpg"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Poetry Picnic"
        price={35}
      />
    </div>
  );
}

export default App;
