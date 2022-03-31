import { createStore } from "redux";

const initState = { value: 0 };
const Reducer = (state = initState, action) => {
  if (action.type === "increase") {
    return { ...state, value: state.value + 1 };
  }

  if (action.type === "decrease") {
    return { ...state, value: state.value - 1 };
  }

if(action.type === "changeState"){

return{...state, value: state.value + "updating"}

}


if(action.type === "reset"){

    return{...state , value:initState.value}
}

if(action.type === "multi"){

return{...state, value:state.value *2}

}

if(action.type ==="divis"){

return{...state , value:state.value /2}

}
  return state;
};

const store = createStore(Reducer);

export default store;
