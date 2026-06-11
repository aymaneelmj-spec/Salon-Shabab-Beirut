export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, time, phone } = req.body;
  console.log(`[BOSS NOTIFICATION] New appointment booked for ${name} at ${time}. Phone: ${phone}`);
  res.status(200).json({ success: true, message: "Boss notified" });
}
