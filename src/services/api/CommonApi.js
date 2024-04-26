import { request } from './request';
export const CommonApi = {
  getMainPage(amount) {
    return request.get(`v1/mainpage/${amount}`);
  },
};
