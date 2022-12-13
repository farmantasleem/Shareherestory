import { bookdata, commondata, getStory, loginsuccess } from "./actionType"

export const GetStory=()=>{
    return {type:getStory}
}

export const GetCommonData=()=>{
    return {type:commondata}
}

export const Authenticated=()=>{
    return {type:loginsuccess}
}

export const getbooksdata=(data)=>{
    return {type:bookdata,payload:data}
}