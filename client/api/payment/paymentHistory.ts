import api from "../api";

const paymentHistory = async () => {
  const { data } = await api.get("/payment/paymentHistory");
  return data;
};

export default paymentHistory;
