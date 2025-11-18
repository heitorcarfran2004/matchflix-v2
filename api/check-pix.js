// check-pix.js
export default async function handler(req, res) {
    if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });
  
    try {
      const { requestSyncPay } = require("./utils/syncpayClient");
      const admin = require("./utils/firebase");
  
      const { txId } = req.query;
      if (!txId) return res.status(400).json({ error: "Missing txId" });
  
      const db = admin.firestore();
      const doc = await db.collection("payments").doc(txId).get();
      if (!doc.exists) return res.status(404).json({ error: "Not found" });
  
      const tx = doc.data();
      if (tx.status === "paid") return res.json({ status: "paid", tx });
  
      const identifier = tx.syncpayResponse?.identifier || tx.syncpayResponse?.id;
      if (!identifier) return res.json({ status: "pending", tx });
  
      const checkResp = await requestSyncPay("GET", `/api/partner/v1/transaction/${identifier}`);
  
      const status = (checkResp.status || "").toLowerCase();
      if (status.includes("paid") || status.includes("confirmed")) {
        await db.collection("payments").doc(txId).update({
          status: "paid",
          confirmedAt: new Date(),
          syncpayLatest: checkResp
        });
        return res.json({ status: "paid", checkResp });
      }
  
      return res.json({ status: "pending", checkResp });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: String(err) });
    }
  }