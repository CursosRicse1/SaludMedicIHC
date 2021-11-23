import React, { useEffect, useState } from 'react'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [loading , setLoading] = useState(false);
    const[error , setError] = useState(false);

    useEffect(()=>{
        try{
            setLoading(true);
            setLoading(false);
        }catch(err){
            setError(err.message);
            setLoading(false);
        }
    }, [] )
    return (
        <div> 
        {loading ? ( <LoadingBox></LoadingBox>
        ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
        ) : (



        <div>
            HomeScreen
            <div className="bg-blue-600 px-5">
                ga
            </div>
        </div>
        
     
        )}
    </div>
    )
}
