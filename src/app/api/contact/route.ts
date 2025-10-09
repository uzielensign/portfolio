import { NextResponse } from 'next/server';

// Server route: forwards form submissions to Formspree to avoid CORS issues in the browser.
export async function POST(req: Request) {
  try {
    // Read form data from the incoming request
    const formData = await req.formData();

    // Determine Formspree form ID from server env var (prefer server-only var), allow either 'f/...' or plain id
    const envId = process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
    if (!envId) {
      return NextResponse.json({ error: 'Formspree form ID is not configured on the server.' }, { status: 500 });
    }
    const normalized = envId.startsWith('f/') ? envId.slice(2) : envId;
    const endpoint = `https://formspree.io/f/${normalized}`;

    // Forward the FormData to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    const text = await response.text();
    // Return plain text response
    return new NextResponse(text, { status: response.status, headers: { 'content-type': response.headers.get('content-type') || 'text/plain' } });
  } catch (err: unknown) {
    console.error('[api/contact] error forwarding submission', err);
    // Use unknown and convert to string to avoid 'any'
    const message = String(err instanceof Error ? err.message : err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
