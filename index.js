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

const  createStore = (initialState) => {
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

const store = createStore(0)

console.log(store.getState())