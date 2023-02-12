import { getStory,commondata,bookdata, loginsuccess, logout } from "./actionType";


const intialState={story:[],auth:true,books:[],userdata:{}}

const storeReducer=(state=intialState,action)=>{
        switch (action.type) {
            case bookdata:
                return{...state,books:[...action.payload]}
                break;
            case loginsuccess:{
                return {...state,auth:true}
            }
            case logout:{
                return {...state,auth:false}
            }
            default:
                return state
                
        }
}

export default storeReducer