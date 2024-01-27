import axios from 'axios';
/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

export const register = async (formData) =>{
  const {fullname, email, password,contactnumber} = formData;
  const config={
    headers:{
      'Content-Type': 'application/json'
    }
  }
  const body=JSON.stringify({fullname, email, password,contactnumber});
  console.log(body);
  try{
    const res=await axios.post('https://api-backend-4tlu.onrender.com/api/auth/signup',body,config);
    return res;
    
  }
  catch(err){
   return err;
  }
}

export const login = async (formData) => {
    const {email, password} = formData;
    const config={
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const body=JSON.stringify({email, password});
    console.log(body);
    try{
      const res=await axios.post('https://api-backend-4tlu.onrender.com/api/auth/signin',body,config);
      return res;
      
    }
    catch(err){
      return err;
    }
  
}