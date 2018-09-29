import axios from 'axios';
import API from '../_api';
import authHeader from '../_helpers/authHeader';
import handleError from '../_helpers/handleError';

const userServices = {
  login: (user, callback, callbackalt) => {
    const data = user;
    const config = { headers: { 'Content-Type': 'application/json' } };
  
    return axios.post(`${API.USERS}/login`, data, config)
      .then(user => {
        // login successful if there's a jwt token in the response
        if (user.data.token) {
          // store user details and jwt token in local storage to keep user logged in between page resfreshes
          localStorage.setItem('token', user.data.token);
          if (callback) {
            setTimeout(callback, 4000);
          }
          if (callbackalt) {
            callbackalt();
          }
        }
        return user;
      })
      .catch(error => handleError(error));
  },
  logout: () => {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  },
  register: (user, callback, callbackalt) => {
    const data = user;
    const config = { headers: { 'Content-Type': 'application/json' } };
  
    return axios.post(`${API.USERS}/register`, data, config)
      .then(user => {
        callback();
        callbackalt();
        return user;
      })
      .catch(error => handleError(error));
  },
  update: (user) => {
    const data = user;
    const config = { headers: { ...authHeader(), 'Content-Type': 'application/json' } };
    
    return axios.put(`${API.USERS}/update`, data, config).catch(error => handleError(error));
  },
  delete: (id) => {
    const config = { headers: authHeader() };
  
    return axios.delete(`${API.USERS}/delete`, config).catch(error => handleError(error));
  }
};

export default userServices;
