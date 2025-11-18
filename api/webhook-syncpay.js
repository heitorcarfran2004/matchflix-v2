// webhook-syncpay.js
export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Method not allowed");
  
    try {
      const admin = require("./utils/firebase");
      const db = admin.firestore();
  
      const payload = req.body;
      const identifier = payload?.identifier || payload?.transactionId || payload?.id;
  
      if (!identifier) return res.json({ ok: false, msg: "Identifier missing" });
  
      const snapshot = await db
        .collection("payments")
        .where("syncpayResponse.identifier", "==", identifier)
        .get();
  
      if (!snapshot.empty) {
        snapshot.forEach(doc => {
          doc.ref.update({
            status: "paid",
            confirmedAt: new Date(),
            webhookPayload: payload
          });
        });
      }
  
      return res.json({ ok: true });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: String(err) });
    }
  }