import axios from 'axios';

const axiosParam = {
    baseURL : process.env.REACT_APP_SBIBANK_SERVER_API_URL || 'http://localhost:8080/api/v1',
    timeout : 10000,
    headers : {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
    }
}

const axiosInstance = axios.create(axiosParam);


const api = (instance) =>{
    return {
        get:(url,headers={})=>instance.get(url,{headers}),
        post:(url,data,headers={})=>instance.post(url,data,{headers}),
        put:(url,data,headers={})=>instance.put(url,data,{headers}),
        delete:(url,headers={})=>instance.delete(url,{headers}),
        patch:(url,data,headers={})=>instance.patch(url,data,{headers})
    }
}

export default api(axiosInstance);