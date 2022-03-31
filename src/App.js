import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const incrase = () => {
    dispatch({ type: "increase" });
  };

  const decrease = () => {
    dispatch({ type: "decrease" });
  };
  const changeState = () => {

dispatch({type:"changeState"})

  }


  const reset = () => {

dispatch({type:"reset"})

  }


  const multi = () =>{

dispatch({type:"multi"})

  }

  const divis = () => {

    dispatch({type:"divis"})
  }
  const handleSubmit = (value) => {
    return value;
  };

  return (
    <>
      <div className="App">
       <h1>Using Redux </h1>
      </div>

      <h2 className="counter">Counter : {handleSubmit(globalState.value)}</h2>
      <div>
        <button className="btn" onClick={changeState}>
        changeState
        </button>
        <button className="btn" onClick={incrase}>
         +
        </button>
        <button className="btn" onClick={decrease}>
          -
        </button>

        <button className="btn" onClick={multi}>
         *2
      </button>
      <button className="btn" onClick={divis}>
      /2
   </button>
        <button className="btn" onClick={reset}>CE</button>
      </div>
    </>
  );
}

export default App;
