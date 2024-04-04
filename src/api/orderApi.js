import axiosClient from './axiosClient';

const orderApi = {
  getAll(params) {
    const url = '/api/order';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/order/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/order`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/order/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/order/${id}`;
    return axiosClient.delete(url);
  },
};

export default orderApi;
