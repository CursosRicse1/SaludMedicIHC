import  Axios  from 'axios'
import AseguradoScreen from 'pages/asegurado';
import React , {useState , useEffect} from 'react'
import DoctorScreen from 'pages/doctor';
import ErrorScreen from 'pages/error';

export default function MainScreen( ) {

   const [ rol , setRole] = useState("");   
   Axios.defaults.withCredentials = true ; 

   useEffect(() => {
        Axios.get("http://localhost:5000/auth/login").then((response)=>{
           
            if(response.data.loggedIn === true){
               

               setRole(response.data.user[0].rol)
            }
        })

   }, []);
    return (
       
        <div>
            
            {rol ===  'asegurado' &&  <AseguradoScreen  /> } 
            {rol === 'doctor'&& <DoctorScreen/>}
            {rol === '' && <ErrorScreen/> }
            
            <h1>f</h1>
        </div>
    )
}
