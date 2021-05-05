/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const quantity = 30
export default {
    getUsers: function () {
        return axios.get(`https://randomuser.me/api?results=${quantity}&nat=us`);
    }
}