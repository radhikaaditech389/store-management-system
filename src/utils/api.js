import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const getAuthHeader = () => {
  const user_detail = localStorage.getItem("user_detail");
  const user = user_detail ? JSON.parse(user_detail) : null;
  const token = user?.token;

  return token
    ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    : {};
};

export const getProducts = (params = {}) =>
  axios.get(`${BASE_URL}/api/products`, {
    headers: getAuthHeader(),
    params: params,
  });

export const getCategories = () =>
  axios.get(`${BASE_URL}/api/categories`, { headers: getAuthHeader() });
export const getBrands = () =>
  axios.get(`${BASE_URL}/api/brands`, { headers: getAuthHeader() });

export const scanBarcode = (barcode) =>
  axios.post(
    `${BASE_URL}/api/sales/scan`,
    { barcode },
    { headers: getAuthHeader() }
  );

export const createSalesBill = (lines) =>
  axios.post(
    `${BASE_URL}/api/sales-bills`,
    { lines },
    { headers: getAuthHeader() }
  );

const generateIdempotencyKey = () =>
  "idemp_" +
  Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

export const paySalesBill = (sales_bill_id, payments) =>
  axios.post(
    `${BASE_URL}/api/sales-bills/pay`,
    { sales_bill_id, payments },
    {
      headers: {
        ...getAuthHeader(),
        "Idempotency-Key": generateIdempotencyKey(),
      },
    }
  );
