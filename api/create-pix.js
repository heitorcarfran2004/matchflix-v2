// create-pix.js
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
    try {
      const { requestSyncPay } = require("./utils/syncpayClient");
      const admin = require("./utils/firebase");
  
      const { planId, amount, customer, utm } = req.body;
      if (!planId || !amount) return res.status(400).json({ error: "Missing parameters" });
  
      const body = {
        reference: `plan_${planId}_${Date.now()}`,
        amount,
        currency: "BRL",
        payer: customer || {},
        metadata: { planId, utm }
      };
  
      const createResp = await requestSyncPay("POST", "/api/partner/v1/cashin", body);
  
      const db = admin.firestore();
      const docRef = await db.collection("payments").add({
        createdAt: new Date(),
        planId,
        amount,
        status: "pending",
        syncpayResponse: createResp
      });
  
      return res.status(200).json({
        ok: true,
        paymentId: docRef.id,
        pix: createResp
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: String(err) });
    }
  }