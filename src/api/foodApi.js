import axiosClient from './axiosClient';

const foodApi = {
  getAll(params) {
    const url = '/api/food';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/food/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/food`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/food/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/food/${id}`;
    return axiosClient.delete(url);
  },
};

export default foodApi;
