// Vercel Serverless Function
// POST /api/create-transaction
// Body: { orderId: string, name: string }
// Creates a Midtrans Snap transaction for a fixed price of Rp 5.000
// and returns the Snap token the frontend needs to open the payment popup.

export const config = {
  runtime: 'nodejs',
};

const PRICE_IDR = 5000;

function getMidtransBaseUrl(): string {
  const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';
  return isProduction
    ? 'https://app.midtrans.com/snap/v1/transactions'
    : 'https://app.sandbox.midtrans.com/snap/v1/transactions';
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  if (!serverKey) {
    res.status(500).json({ error: 'MIDTRANS_SERVER_KEY belum diset di environment variables Vercel.' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { orderId, name } = body || {};

    if (!orderId || typeof orderId !== 'string') {
      res.status(400).json({ error: 'orderId wajib diisi' });
      return;
    }

    const authHeader = 'Basic ' + Buffer.from(`${serverKey}:`).toString('base64');

    const midtransRes = await fetch(getMidtransBaseUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: orderId,
          gross_amount: PRICE_IDR,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: (name || 'Peserta Tes').slice(0, 50),
        },
        item_details: [
          {
            id: 'sertifikat-hasil-iq',
            price: PRICE_IDR,
            quantity: 1,
            name: 'Akses Sertifikat & Hasil Tes IQ',
          },
        ],
      }),
    });

    const data = await midtransRes.json();

    if (!midtransRes.ok) {
      res.status(midtransRes.status).json({ error: data.error_messages || 'Gagal membuat transaksi Midtrans' });
      return;
    }

    res.status(200).json({ token: data.token, redirect_url: data.redirect_url });
  } catch (err: any) {
    res.status(500).json({ error: err?.message || 'Terjadi kesalahan pada server' });
  }
}
