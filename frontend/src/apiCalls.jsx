import axios from 'axios'


export const loginCall = async (userCredentials,dispatch) =>{
    const PF_SERVER = import.meta.env.VITE_PF_SERVER
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post(PF_SERVER + 'auth/login',userCredentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        localStorage.setItem("socialMediaUser",JSON.stringify(res.data))
    }catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err})
    }
}
