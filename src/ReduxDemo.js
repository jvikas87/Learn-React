const redux = require("redux");

const createStore = redux.createStore;

const initialState = {counter:0};

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD':
            return {counter:state.counter+1};
            
    }
    return state;

}
const store = createStore(reducer);
console.log(store.getState());
store.subscribe(()=>{
    console.log(store.getState());
});

console.log(initialState);
store.dispatch({type:'ADD'});
console.log(store.getState());

