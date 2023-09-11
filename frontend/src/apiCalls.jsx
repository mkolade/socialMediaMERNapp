import axios from 'axios'

export const loginCall = async (userCredentials,dispatch) =>{
    const PF_SERVER = import.meta.env.VITE_PF_SERVER
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post(PF_SERVER + 'auth/login',userCredentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        const userData = {
            _id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            password:res.data.password,
            following:res.data.following
          };
        localStorage.setItem("socialMediaUser",JSON.stringify(res.data))
        console.log(userData)
    }catch(err){
       
        dispatch({type:"LOGIN_FAILURE",payload:err})
    }
}
