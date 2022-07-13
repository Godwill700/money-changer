import "./App.scss";
import RateCharge from "./components/RateCharge";
import ProductPrice from "./components/productPrice";
import Result from "./components/Result";

function App() {
  return (
    <div className="app-container">
      <div className="main">
        <header className="logo">
          <h1 className="logo">Money Changer</h1>
        </header>
        <section className="intro">
          <p>
            Forget about doing crazy math in your head about which currency to
            use to make a purchase as we level the playing field with Money
            Changer
          </p>
        </section>
        <RateCharge />
        <ProductPrice />
        <Result />
      </div>
    </div>
  );
}

export default App;
