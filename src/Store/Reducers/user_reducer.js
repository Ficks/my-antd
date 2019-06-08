import {SET_USERINFO} from '../Types/user_type';

export const userInfo = function (state = {}, action) {
  switch (action.type) {
    case SET_USERINFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};
