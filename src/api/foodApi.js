import axiosClient from './axiosClient';

const foodApi = {
  getAll(params) {
    const url = '/food';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/food/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/food`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/food/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/food/${id}`;
    return axiosClient.delete(url);
  },
};

export default foodApi;
