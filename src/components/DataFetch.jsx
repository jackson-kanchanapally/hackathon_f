import {React,useEffect,useState} from 'react'
import Chart from './Chart'
const url="/api/data"
const Honey=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res=await fetch(url)
            const js= await res.json()
            
            if(res.ok)
            {
                setData(js)
            }
    
        }
        catch(err){
            console.log(err)
        }
       }
        fetchData()
    },[])
  
    return(
    <div>
        {data&&data.map((i)=>(
            <>
            <Chart dd={i._id}/>
            </>
        ))}
    </div>
    )
}
export default Honey;