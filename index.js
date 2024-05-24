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

}

console.log(store.getState())