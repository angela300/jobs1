import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': 'ef2bcb6032msh4bb7e10f48c63b4p13d307jsn82cdc243a881',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {...query},
    };

    const fetchData = async () => {
      setIsLoading(true);

      try{
        const response = await axios.request(options);

        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error)
        alert(error)
      } finally{
        setIsLoading(false)
      }
    }

    useEffect(()=>{
      fetchData();
    }, [])

    const refetch = ()=>{
      setIsLoading(true);
      fetchData();
    }

    return { data, isLoading, error, refetch};
}

export default useFetch;




