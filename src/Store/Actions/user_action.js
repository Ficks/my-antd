import { SET_USERINFO } from '../Types/user_type';

export const setUserInfo = function (userInfo) {
    return {
        type: SET_USERINFO,
        payload: { userInfo }
    }
}