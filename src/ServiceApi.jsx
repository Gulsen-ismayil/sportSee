import axios from "axios";
import { useEffect} from "react";


function ServiceApi({ error,onDataFetched }) {

    useEffect(() => {
      axios
        .get("http://localhost:3000/user/12")
        .then((response) => {onDataFetched('user', response.data)})
        // .catch(error => {
        //             console.error(error)
        //             setError('user', error.message)
        // });
        .catch(error)
    
      axios
        .get("http://localhost:3000/user/12/average-sessions")
        .then((response) => {onDataFetched('averageActi', response.data)})
        .catch(error => {
                    console.error(error)
                    // setError('averageActi', error.message)
         });
    
      axios
        .get("http://localhost:3000/user/12/activity")
        .then((response) => {onDataFetched('activity', response.data)})
        .catch(error => {
                    console.error(error)
                    // setError('activity', error.message)
        });
    
      axios
        .get("http://localhost:3000/user/12/performance")
        .then((response) => {onDataFetched('performance', response.data)})
        .catch(error => {
                    console.error(error)
                    // setError('performance', error.message)
        });
    }, []);

    
    return null
}

export default ServiceApi