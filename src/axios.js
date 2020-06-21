import axios from 'axios';

const instance = axios.create({
    baseURL:"https://mel-burger-maker.firebaseio.com/"
});

export default instance;