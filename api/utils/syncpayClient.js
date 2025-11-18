// utils/syncpayClient.js
const axios = require("axios");

const BASE = process.env.SYNCPAY_BASE_URL; // DEVE SER https://api.syncpay.com.br/
const CLIENT_ID = process.env.SYNCPAY_CLIENT_ID;
const CLIENT_SECRET = process.env.SYNCPAY_CLIENT_SECRET;

let cachedToken = null;
let expiration = 0;

async function getToken() {
  const now = Date.now();
  if (cachedToken && now < expiration) return cachedToken;

  // 🔥 ENDPOINT CORRETO DA API NOVA DA SYNCPAY
  const resp = await axios.post(`${BASE}/oauth2/token`, {
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  });

  cachedToken = resp.data.access_token;
  expiration = now + (resp.data.expires_in - 20) * 1000;

  return cachedToken;
}

async function requestSyncPay(method, path, body = {}, params = {}) {
  const token = await getToken();

  const res = await axios({
    method,
    url: `${BASE}${path}`,
    data: body,
    params,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return res.data;
}

module.exports = { requestSyncPay };
