import axios from 'axios';

export default axios.create({
  baseURL: `https://apiv3.apifootball.com/?action=`,
});
