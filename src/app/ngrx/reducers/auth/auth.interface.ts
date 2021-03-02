export interface AuthState {
  username: string;
  password: string;
  uid: string;
  email: string;
  nickname: string;
  img: string;
}

export const _userAuthKey = 'userAuth';
