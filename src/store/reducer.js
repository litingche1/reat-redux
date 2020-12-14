const defaultState = {
    inputValue: 'jspang',
    list: []
}
export default (state = defaultState, action) => {
    if(action.type==='change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return  newState
    }
    if(action.type==='addList'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type==='deleteItem'){
        let newSate=JSON.parse(JSON.stringify(state))
        newSate.list.splice(action.index,1)
        return newSate
    }
    return state
}