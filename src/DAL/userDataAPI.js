import * as axios from "axios";

export const usersDataAPI = {
    getInfo() {
        debugger;
        return axios.get(`http://devgrassy3.local/api/1.0/getUser/`)
            .then(response => {
                return response;
            });
    }
}



