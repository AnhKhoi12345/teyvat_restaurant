import axiosClient from './axiosClient';

const staffApi = {
  getAll(params) {
    const url = '/api/staff';
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = `/api/staff/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/api/staff`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/api/staff/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/api/staff/${id}`;
    return axiosClient.delete(url);
  },
};

export default staffApi;
