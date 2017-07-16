const initialState = {
    storeData : ""
};


const calculate = (state = initialState, action = {}) => {
    if(action.type == "ADD_INPUT"){
        return {storeData : state.storeData+action.operation}
    }
    if(action.type == "PROCESS_INPUT"){
        return {storeData : eval(state.storeData)}
    }
    return initialState;
};

export default calculate;