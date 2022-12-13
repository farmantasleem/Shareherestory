import { getStory,commondata,bookdata, loginsuccess } from "./actionType";


const intialState={story:[],auth:false,books:[],userdata:{}}

const storeReducer=(state=intialState,action)=>{
        switch (action.type) {
            case bookdata:
                return{...state,books:[...action.payload]}
                break;
            case loginsuccess:{
                return {...state,auth:true}
            }
            default:
                return state
                
        }
}

export default storeReducer