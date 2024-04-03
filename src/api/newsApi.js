import axiosClient from './axiosClient';

const newsApi = {
  getAll(params) {
    const url = '/api/news';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/news/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/news`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/news/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/news/${id}`;
    return axiosClient.delete(url);
  },
};

export default newsApi;
