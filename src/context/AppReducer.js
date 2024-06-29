export const AppReducer= (state, action) => {
    if(action.TYPE === 'C'){
        return ""
    }
    else if(action.TYPE ==='='){
        return eval(state)
    }
    else if(action.TYPE ==='X'){
        return state + '*'
    }
    else{
        return state + action.TYPE;
    }
        
}