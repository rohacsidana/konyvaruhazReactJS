import "./Konyv.css";

//function komponens
function Konyv(props) {
  function kosarba() {
    //console.log(props.konyv);
    props.kezelesFv(props.konyv)
  }
  return (
    <div className="Konyv">
      <h2>Cím: {props.konyv.cim}</h2>
      <h3>Szerző: {props.konyv.szerzo}</h3>
      <p>Ár: {props.konyv.ar}Ft</p>
      <button onClick={kosarba}>Kosárba</button>
    </div>
  );
}

export default Konyv;
