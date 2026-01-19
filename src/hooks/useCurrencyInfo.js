import { useEffect , useState } from "react";
import axios from "axios"

function useCurrencyInfo(currency){
    const [data,setData] =useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // .then((res) => res.json())
        // .then((res) => setData(res[currency]))

        (async()=>{
            const response =await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            setData(response.data[currency])
        })()
        
    },[currency])
    return data;
}

export default useCurrencyInfo;