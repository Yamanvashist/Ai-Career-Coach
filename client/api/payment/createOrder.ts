import api from "../api";

const createOrder = async (amount: number, subscription: string) => {
  try {
    const { data } = await api.post("/payment/createOrder", {
      amount,
      subscription,
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export default createOrder;
