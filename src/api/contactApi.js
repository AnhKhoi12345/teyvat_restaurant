import axiosClient from './axiosClient';

const contactApi = {
  getAll(params) {
    const url = '/api/contact';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/contact/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/contact`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/contact/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/contact/${id}`;
    return axiosClient.delete(url);
  },
};

export default contactApi;
