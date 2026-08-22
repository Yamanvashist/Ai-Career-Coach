import api from "../api";

const paymentHistory = async () => {
  try {
    const { data } = await api.get("/payment/paymentHistory");
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default paymentHistory;
