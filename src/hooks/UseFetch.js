import {useState, useEffect} from 'react';

const UseFetch = (initialUrl) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(null);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
    if(!url) return;
    setCargando(true);
    
    setData(null);
    setError(null);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log("Data list Loaded", data.list)
            //const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
            //console.log(dailyData);
            setCargando(false);
            if(data.cod >= 400) {
                setError("Ciudad no encontrada");
                return;
            }
            setData(data);
        })
        .catch((error) => {
            setCargando(false);
            setError(error);
        });
}, [url]);

    return { data, error, cargando, setUrl, };
};

export default UseFetch;
