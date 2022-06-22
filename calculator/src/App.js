
import './App.css';

function App() {
  // reset btn for onClick
  const reset = () => {

  }
  return (
    <div className="App">
      <h1> welcome title </h1>
      <div className="calculator wrapper">

        <div className="display">
         
        </div>

        <div className="keypad">
          
        <div id="row1">
          <button className="pf" onClick={ reset } > c </button>
          <button className="pf" onClick={ "some fn" }> &#177; </button>
          <button className="pf" onClick={ "some fn" }> % </button>
          <button className="op" onClick={ "some fn" }> &#247; </button>
        </div>

        <div id="row2">
          <button className="num" onClick={ "some fn" } > 7 </button>
          <button className="num" onClick={ "some fn" }> 8 </button>
          <button className="num" onClick={ "some fn" }> 9 </button>
          <button className="op" onClick={ "some fn" }> &#215; </button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
