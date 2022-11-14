import jwt_decode from "jwt-decode";

import { setCookie, removeCookie } from '../../helpers/cookies';
import { IJWT } from "../../types/user.types";
import * as constants from '../constants/user.constants';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    /*case constants.USER_ON_LOGIN_SUCCEEDED:
      const decoded: IJWT = jwt_decode(data.token);
      setCookie('accessToken', data.token, {
        path: '/',
        maxAge: decoded.exp,
      });
      break;
     
    case constants.USER_ON_LOGOUT_SUCCEEDED:
      removeCookie('accessToken', { path: '/' });
      break;
     */
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
