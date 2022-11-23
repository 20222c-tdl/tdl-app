import jwt_decode from "jwt-decode";

import { setCookie, removeCookie } from '../../helpers/cookies';
import { IJWT } from "../../types/user.types";
import * as constants from '../constants/user.constants';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_SUCCEEDED:
      const decoded: IJWT = jwt_decode(data.access_token);
      setCookie('access_token', data.access_token, {
        path: '/',
        maxAge: decoded.exp,
      });
      break;

    case constants.USER_ON_LOGOUT:

      removeCookie('access_token', { path: '/' });
      break;

    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
