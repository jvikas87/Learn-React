const initialState = {
    title:'Counter App',
    counter: 0,
    counterState: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            {
                return {...state, counter: state.counter + 1, counterState: [...state.counterState, { id: state.counter + 1, val: 0 }] };
            }

        case 'REMOVE_COUNTER':
            {   
            let removedIndex = state.counterState.findIndex(x => x.id === action.id);
            state.counterState.splice(removedIndex, 1)
            return { ...state,counterState: [...state.counterState] };
            }
        case 'DECREMENT':
            {
            let updatedCounterIndex = state.counterState.findIndex(x => x.id === action.id);
            let updatedState = [...state.counterState];
            let updatedObj = updatedState[updatedCounterIndex];
            updatedState[updatedCounterIndex] = { ...updatedObj, val: updatedObj.val - 1 };
            return {...state, counterState: updatedState };
            }
        case 'INCREMENT':
            { 
            let updatedCounterIndex = state.counterState.findIndex(x => x.id ===action.id);
            let updatedState = [...state.counterState];
            let updatedObj = updatedState[updatedCounterIndex];
            updatedState[updatedCounterIndex] = { ...updatedObj, val: updatedObj.val + 1 };
            return { ...state, counterState: updatedState };
            }
    }
    return state;
}

export default reducer;