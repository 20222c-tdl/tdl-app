import history from '../../helpers/history';
import * as userConstants from '../constants/user.constants';
import * as communityConstants from '../constants/community.constants';
import * as providersConstants from '../constants/providers.constants';



const redirectMiddleware = () => (next: any) => (action: any) => {
    const { type } = action;
    switch (type) {
        case userConstants.USER_ON_SIGN_UP_SUCCEEDED:
            history.push('/loginUser');
            break;
        case userConstants.USER_ON_LOGIN_SUCCEEDED:
            history.push('/home');
            break;
        case communityConstants.COMMUNITY_ON_SIGN_UP_SUCCEEDED:
            history.push('/loginCommunity');
            break;
        case communityConstants.COMMUNITY_ON_LOGIN_SUCCEEDED:
            history.push('/claimsManagment');
            break;
        case providersConstants.PROVIDER_ON_SIGN_UP_SUCCEEDED:
            history.push('/loginProvider');
            break;
        case providersConstants.PROVIDER_ON_LOGIN_SUCCEEDED:
            //history.push('/home');
            break;
        default:
            break;
    }
    return next(action);
};

export default redirectMiddleware;
