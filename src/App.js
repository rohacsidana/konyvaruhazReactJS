import "./App.css";
import Konyv from "./Konyv";

const konyvObjektum = [
  {
    cim: "Verity",
    szerzo: "Colleen Hoover",
    ar: 2450,
  },
  { cim: "Eat, Pray, Love", szerzo: " Elizabeth Gilbert", ar: 3650 },
  { cim: "Malone Dies", szerzo: "Samuel Beckett", ar: 1250 },
];

//function komponens
function App() {
  function kosarKezeles(adat) {
    console.log(adat);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article>
        {konyvObjektum.map((konyv, index) => {
          return <Konyv konyv={konyv} key={index} kezelesFv={kosarKezeles} />;
        })}
      </article>
      <footer>
        <p>Rohácsi Dana</p>
      </footer>
    </div>
  );
}

export default App;
