import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '44a810e76b3a45989019f9912706b704',
  },
});
