
import './App.css';

function App() {
  // reset btn for onClick
  const reset = () => {

  }
  return (
    <div className="App">
      <h1> React Calculator </h1>
      <div className="calculator wrapper">

        <div id="display">
         
        </div>

        <div className="keypad">
          
        <div id="row1">
          <button className="pf cl" onClick={ reset } > c </button>
          <button className="pf even" onClick={ "some fn" }> &#177; </button>
          <button className="pf percent" onClick={ "some fn" }> % </button>
          <button className="op div" onClick={ "some fn" }> &#247; </button>
        </div>

        <div id="row2">
          <button className="num 7" onClick={ "some fn" } > 7 </button>
          <button className="num 8" onClick={ "some fn" }> 8 </button>
          <button className="num 9" onClick={ "some fn" }> 9 </button>
          <button className="op mult" onClick={ "some fn" }> &#215; </button>
        </div>

        <div id="row3">
          <button className="num 4" onClick={ "some fn" } > 4 </button>
          <button className="num 5" onClick={ "some fn" }> 5 </button>
          <button className="num 6" onClick={ "some fn" }> 6 </button>
          <button className="op sub" onClick={ "some fn" }> - </button>
        </div>

        <div id="row4">
          <button className="num 1" onClick={ "some fn" } > 1 </button>
          <button className="num 2" onClick={ "some fn" }> 2 </button>
          <button className="num 3" onClick={ "some fn" }> 3 </button>
          <button className="op add" onClick={ "some fn" }> + </button>
        </div>

        <div id="row5">
          <button className="num zero" onClick={ "some fn" } > 0 </button>
          <button className="num dec" onClick={ "some fn" }> . </button>
          <button className="num eql" onClick={ "some fn" }> = </button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;
