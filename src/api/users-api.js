export const UsersAPI = {
  async getUsers(limit = 5, offset = 0) {
    const res = await fetch(
      `https://test.relabs.ru/api/users/list?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    return data;
  },
};
