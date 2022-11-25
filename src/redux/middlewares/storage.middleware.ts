import jwt_decode from "jwt-decode";

import { setCookie, removeCookie } from '../../helpers/cookies';
import { IJWT } from "../../types/user.types";
import * as constants from '../constants/user.constants';
import * as providerConstants from '../constants/providers.constants';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_SUCCEEDED:
    case providerConstants.PROVIDER_ON_LOGIN_SUCCEEDED:
      const decoded: IJWT = jwt_decode(data.bearer);

      setCookie('access_token', data.bearer, {
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
