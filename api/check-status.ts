// Vercel Serverless Function
// GET /api/check-status?orderId=xxx
// Verifies the *real* payment status directly with Midtrans (server-to-server),
// so the frontend can never fake "paid" by tampering with client-side state.

export const config = {
  runtime: 'nodejs',
};

function getMidtransStatusUrl(orderId: string): string {
  const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';
  const base = isProduction ? 'https://api.midtrans.com' : 'https://api.sandbox.midtrans.com';
  return `${base}/v2/${encodeURIComponent(orderId)}/status`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  if (!serverKey) {
    res.status(500).json({ error: 'MIDTRANS_SERVER_KEY belum diset di environment variables Vercel.' });
    return;
  }

  const { orderId } = req.query || {};
  if (!orderId || typeof orderId !== 'string') {
    res.status(400).json({ error: 'orderId wajib diisi' });
    return;
  }

  try {
    const authHeader = 'Basic ' + Buffer.from(`${serverKey}:`).toString('base64');

    const midtransRes = await fetch(getMidtransStatusUrl(orderId), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: authHeader,
      },
    });

    const data = await midtransRes.json();

    if (!midtransRes.ok) {
      // Midtrans returns 404 with status_code 404 if the order_id doesn't exist yet
      res.status(200).json({ paid: false, status: data.transaction_status || 'not_found' });
      return;
    }

    const status = data.transaction_status;
    const paid = status === 'settlement' || status === 'capture';

    res.status(200).json({ paid, status });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Terjadi kesalahan pada server' });
  }
}
