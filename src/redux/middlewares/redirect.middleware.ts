import history from '../../helpers/history';
import * as userConstants from '../constants/user.constants';
import * as communityConstants from '../constants/community.constants';



const redirectMiddleware = () => (next: any) => (action: any) => {
    const { type } = action;
    switch (type) {
        case userConstants.USER_ON_LOGIN_SUCCEEDED:
            history.push('/loginUser');
            break;
        case communityConstants.COMMUNITY_ON_SIGN_UP_SUCCEEDED:
            history.push('/loginCommunity');
            break;
        default:
            break;
    }
    return next(action);
};

export default redirectMiddleware;
