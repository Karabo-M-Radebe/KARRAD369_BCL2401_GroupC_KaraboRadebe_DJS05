/*const state = {
    value: 1, 
}
const increment = (state) => {
    return {
        ...state,
    value: state.value + 1 
    }
}

const decrement = (state) => {
    return {
        ...state,
        value: state.value - 1
    }
}

const get = (state, key) => {
    return state[key]
}*/

const  createStore = (initialState, reducer) => {
    const state = initialState;
    const actions = [];

    const subscribe = (action, callback) => {
        actions.push({action, callback})
    }

    const dispatch = (action) => {
        state = reducer (state, action, actions)
    }

    const getState = () => {
        return state
    }

    return {getState, dispatch, subscribe}
}
const reducer = () => {
    const found = actions.find((newAction) => newAction.action.type === action.type)
    return found.callback(state)
}

const store = createStore(0, reducer)

store.subscribe({type: 'Add'}, (state) => state +1)
store.subscribe({type: 'Reset'}, (state) => 0)
store.subscribe({type: 'Sub'}, (state) => state -1) 

console.log(store.getState())

store.dispatch({type: 'Add'})
console.log(store.getState())

store.dispatch({type: 'Add'})
console.log(store.getState())

store.dispatch({type: 'Sub'})
console.log(store.getState())

store.dispatch({type:'Reset'})
console.log(store.getState())


