// You can ignore the implmentation here, should demonstrate a call to a persistent storage
const data = {
  '19471c1e-6f8c-45ef-9646-5a2022e29cfd': true,
  '89471c1e-6f8c-45ef-9646-5a2022e22cf2': true,
};

export default {
  getWebhook: (id: string) => {
    return new Promise((res) => {
      res(data[id]);
    });
  },
  saveWebhook: (id: string) => {
    data[id] = true;
    return Promise.resolve();
  },
};
