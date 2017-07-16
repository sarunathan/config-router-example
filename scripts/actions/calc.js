export function addInput(v){
    return {
        type  : "ADD_INPUT",
        operation : v
    }
}

export function processInput(){
    return {
        type  : "PROCESS_INPUT"
    }
}