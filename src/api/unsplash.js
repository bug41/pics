import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/search/photos',
    headers:{
        Authorization: 'Client-ID SNLJotwDi7KCJNjw050KSqauYoKrL8bWemaWlaqMqw4'
    }
})