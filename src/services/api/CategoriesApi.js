import { request } from './request';
export const CategoriesApi = {
  getAllCategories() {
    return request.get(`v1/category/list`);
  },
};
