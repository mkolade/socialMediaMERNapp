import axios from 'axios'


export const loginCall = async (userCredentials,dispatch) =>{
    const PF_SERVER = import.meta.env.VITE_PF_SERVER
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post(PF_SERVER + 'auth/login',userCredentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
        localStorage.setItem("socialMediaUser",JSON.stringify(res.data))
    }catch(err){
       // Check if the error contains the response object
    if (err.response && err.response.data && err.response.data.message) {
        // Access the error message from the response data
        dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data.message });
        console.log(err.response.data.message);
      } else {
        // Fallback to a generic error message if no response data available
        dispatch({ type: 'LOGIN_FAILURE', payload: 'An error occurred' });
        console.log('An error occurred');
      }
    }
}
