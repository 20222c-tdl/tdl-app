import { AnyAction } from 'redux';
import { ICard } from 'types/user.types';
import { IClaimFormData } from 'views/Claims/types';
import { IPasswordFormData } from 'views/Profile/components/PasswordForm/types';
import { ILoginFormData } from '../../views/Login/types';
import { ISignupUserFormData } from '../../views/SignupUser/types';
import * as constants from '../constants/user.constants';

// userOnInitialize
export function userOnInitializeRequested(): AnyAction {
    return {
        type: constants.USER_ON_INITIALIZE_REQUESTED,
    };
}

export function userOnInitializeSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_INITIALIZE_SUCCEEDED,
        data
    };
}

export function userOnInitializeFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_INITIALIZE_FAILED,
        error
    };
}

// onGetProfileInfo
export function onGetProfileInfoRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_PROFILE_INFO_REQUESTED,
        userId
    };
}

export function onGetProfileInfoSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PROFILE_INFO_SUCCEEDED,
        data
    };
}

export function onGetProfileInfoFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PROFILE_INFO_FAILED,
        error
    };
}

// onLogin
export function onLoginUserRequested(formData: ILoginFormData): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_REQUESTED,
        formData
    };
}

export function onLoginUserSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_SUCCEEDED,
        data
    };
}

export function onLoginUserFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_LOGIN_FAILED,
        error
    };
}

//onLogout
export function onLogout(): AnyAction {
    return {
        type: constants.USER_ON_LOGOUT,
    };
}

// onSignup
export function onSignupUserRequested(formData: ISignupUserFormData): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_REQUESTED,
        formData
    };
}

export function onSignupUserSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_SUCCEEDED,
        data
    };
}

export function onSignupUserFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_FAILED,
        error
    };
}

// onRegisterAClaim
export function onRegisterAClaimRequested(formData: IClaimFormData): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_REQUESTED,
        formData
    };
}

export function onRegisterAClaimSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_SUCCEEDED,
        data
    };
}

export function onRegisterAClaimFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_FAILED,
        error
    };
}

// onUserGetClaims
export function onUserGetClaimsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_REQUESTED,
        userId
    };
}

export function onUserGetClaimsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_SUCCEEDED,
        data
    };
}

export function onUserGetClaimsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_FAILED,
        error
    };
}

// onEditClaim
export function onEditClaimRequested(formData: IClaimFormData): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_REQUESTED,
        formData
    };
}

export function onEditClaimSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_SUCCEEDED,
        data
    };
}

export function onEditClaimFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_FAILED,
        error
    };
}

// onMakeReservation
export function onMakeReservationRequested(data: any): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_REQUESTED,
        data
    };
}

export function onMakeReservationSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_SUCCEEDED,
        data
    };
}

export function onMakeReservationFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_FAILED,
        error
    };
}

// onPostComment
export function onPostCommentRequested(data: any): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_REQUESTED,
        data
    };
}

export function onPostCommentSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_SUCCEEDED,
        data
    };
}

export function onPostCommentFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_FAILED,
        error
    };
}

//onGetAllReservations
export function onGetAllReservationsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_ALL_RESERVATIONS_REQUESTED,
        userId
    };
}

export function onGetAllReservationsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_ALL_RESERVATIONS_SUCCEEDED,
        data
    };
}

export function onGetAllReservationsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_ALL_RESERVATIONS_FAILED,
        error
    };
}

// onCancelReservation
export function onCancelReservationRequested(reservationId: string): AnyAction {
    return {
        type: constants.USER_ON_CANCEL_RESERVATION_REQUESTED,
        reservationId
    };
}

export function onCancelReservationSucceded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_CANCEL_RESERVATION_SUCCEEDED,
        data
    };
}

export function onCancelReservationFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_CANCEL_RESERVATION_FAILED,
        error
    };
}

//onGetUserReviews
export function onGetUserReviewsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_REVIEWS_REQUESTED,
        userId
    };
}

export function onGetUserReviewsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_REVIEWS_SUCCEEDED,
        data
    };
}

export function onGetUserReviewsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_REVIEWS_FAILED,
        error
    };
}

// onLeaveAReview
export function onLeaveAReviewRequested(data: any): AnyAction {
    return {
        type: constants.USER_ON_LEAVE_A_REVIEW_REQUESTED,
        data
    };
}

export function onLeaveAReviewSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_LEAVE_A_REVIEW_SUCCEEDED,
        data
    };
}

export function onLeaveAReviewFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_LEAVE_A_REVIEW_FAILED,
        error
    };
}

// onPayReservation
export function onPayReservationRequested(reservationId: string): AnyAction {
    return {
        type: constants.USER_ON_PAY_RESERVATION_REQUESTED,
        reservationId
    };
}

export function onPayReservationSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_PAY_RESERVATION_SUCCEEDED,
        data
    };
}

export function onPayReservationFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_PAY_RESERVATION_FAILED,
        error
    };
}

// onGetCommunityPhoto
export function onGetUserPhotoRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_PHOTO_REQUESTED,
        userId
    };
}

export function onGetUserPhotoSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PHOTO_SUCCEEDED,
        data
    };
}

export function onGetUserPhotoFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PHOTO_FAILED,
        error
    };
}

// onUpdateProfile
export function onUpdateProfileRequested(data: any, userId: string): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PROFILE_REQUESTED,
        data,
        userId
    };
}

export function onUpdateProfileSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PROFILE_SUCCEEDED,
        data
    };
}

export function onUpdateProfileFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PROFILE_FAILED,
        error
    };
}

// onUpdatePassword
export function onUpdatePasswordRequested(data: IPasswordFormData, userId: string): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PASSWORD_REQUESTED,
        data,
        userId
    };
}

export function onUpdatePasswordSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PASSWORD_SUCCEEDED,
        data
    };
}

export function onUpdatePasswordFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_UPDATE_PASSWORD_FAILED,
        error
    };
}

// onGetCards
export function onGetCardsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_CARDS_REQUESTED,
        userId
    };
}

export function onGetCardsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CARDS_SUCCEEDED,
        data
    };
}

export function onGetCardsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CARDS_FAILED,
        error
    };
}

// onAddNewCard
export function onAddNewCardRequested(data: ICard): AnyAction {
    return {
        type: constants.USER_ON_ADD_NEW_CARD_REQUESTED,
        data
    };
}

export function onAddNewCardSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_ADD_NEW_CARD_SUCCEEDED,
        data
    };
}

export function onAddNewCardFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_ADD_NEW_CARD_FAILED,
        error
    };
}

// onDeleteCardCard
export function onDeleteCardCardRequested(cardId: string): AnyAction {
    return {
        type: constants.USER_ON_DELETE_CARD_REQUESTED,
        cardId
    };
}

export function onDeleteCardCardSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_DELETE_CARD_SUCCEEDED,
        data
    };
}

export function onDeleteCardCardFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_DELETE_CARD_FAILED,
        error
    };
}

// onGetPlacesReservations
export function onGetPlacesReservationsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_PLACES_RESERVATIONS_REQUESTED,
        userId
    };
}

export function onGetPlacesReservationsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PLACES_RESERVATIONS_SUCCEEDED,
        data
    };
}

export function onGetPlacesReservationsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_PLACES_RESERVATIONS_FAILED,
        error
    };
}
