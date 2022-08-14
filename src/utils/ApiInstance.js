import axios from 'axios';


const instance = axios.create({
    baseURL: '',
});

instance.interceptors.request.use(
    async (request) => {
        request.headers['Content-Type'] = 'application/json';
        request.headers['Access-Control-Allow-Methods'] =
            'GET, PUT, POST, DELETE, OPTIONS';
        return request;
    },
    (error) => {
        console.log("apiinstance", error)
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        let { statusCode } = error?.response?.data;
        if (statusCode === 401) {
            if (global.is401Navigated === false) {
                global.is401Navigated = true;
                alert(error?.response?.data?.message);
               
            }
        }
        else if (statusCode === 404 || statusCode === 500) {
            alert(error?.response?.data?.message)
        } else {
            return Promise.reject(error.response.data);
        }
    },
);

export default instance;