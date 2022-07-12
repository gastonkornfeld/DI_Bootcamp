

const initState = {
    hello: 'first from store',
    by: 'second from store',
    calabaza: 'this is new',
    sayHello:'lets try this',
}

export const reducer = (state= initState, action) => {
    switch (action.type) {
        case 'CHANGE_PROP_TWO':
            return {...state, sayHello:action.payload}
        case 'CHANGE_PROP_ONE':
            return {...state, calabaza:state.sayHello}
        
        default:
            return {...state}
    }
    
}