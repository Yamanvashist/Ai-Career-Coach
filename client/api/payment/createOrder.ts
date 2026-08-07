import api from "../api";

const createOrder = async (amount: number, subscription: string) => {
  const { data } = await api.post("/payment/createOrder", {
    amount,
    subscription,
  });

  return data;
};

export default createOrder;
