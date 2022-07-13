
const initState = {
    counter: 0
}

export const reducer = (state= initState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case 'ADD':
            return {...state, counter: state.counter+1}
        case 'SUBSTRACT':
            return {...state, counter: state.counter-1}
        default:
            return {...state}
    }
}