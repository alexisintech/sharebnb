import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id} // a component needs a key - in this case, we assigned arbritary id numbers to each item
            {...item} // spread syntax creates a prop for each property of the object. so, price={item.price} , location={item.location}
        />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
