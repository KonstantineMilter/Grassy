import * as axios from "axios";


// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'http://localhost:3000/backEnd/index.php',
//     headers:     {
//         "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
//     }
// });


export const usersAPI = {
    getInfo() {
        debugger;
        return axios.get(`http://devgrassy3.local/api/1.0/getUser/`)
            .then(response => {
                return response;
            });
    }
}



