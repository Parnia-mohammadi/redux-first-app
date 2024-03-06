import { buy_milk } from "./milkTypes";

const initialState = {
    numOfMilks : 20,
}
export default function milkReducer(state=initialState,{type, payload}){
    switch(type){
        case buy_milk : return({...state,numOfMilks:state.numOfMilks - payload});
        default :return state;
    }
}