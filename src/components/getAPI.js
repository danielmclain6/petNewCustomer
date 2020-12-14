
import axios from 'axios';



const GetApi = () => {
    const URL = "http://localhost:9000/api/customer/only"

    
    const getApi = (resource, id) => {
        return axios.get(URL);
    }
    

    const postApi = (state) => {
        return axios.post(URL, state);
        
        }

    const putApi = () => {
        return axios.put("");
    }

    const deleteApi = () => {
        return axios.delete("")
    }

    return {
        get:getApi,
        post:postApi,
        put:putApi,
        delete:deleteApi
    };
}

export default GetApi;