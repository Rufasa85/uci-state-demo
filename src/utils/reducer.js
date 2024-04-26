import { DECREMENT, INCREMENT,RESET,EDIT_NAME } from "./actions";

export const reducer = (state,actionObj)=>{
    switch (actionObj.type) {
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return {
                ...state,
                count:state.count-1
            }
        case RESET:
            return {
                ...state,
                count:0
            }
        case EDIT_NAME:
            return {
                ...state,
                name:actionObj.payload
            }
        default:
            return state
    }
}