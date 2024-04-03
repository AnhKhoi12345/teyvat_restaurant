import axiosClient from './axiosClient';

const bookApi = {
  getAll(params) {
    const url = '/api/book';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/book/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/book`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/book/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/book/${id}`;
    return axiosClient.delete(url);
  },
};

export default bookApi;
