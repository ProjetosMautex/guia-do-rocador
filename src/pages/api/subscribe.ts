import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const email = data.email;

    if (!email) {
      return new Response(JSON.stringify({ message: 'E-mail obrigatório' }), { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': import.meta.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true,
        listIds: [9], // Lista ID 9 conforme solicitado
      }),
    });

    const responseData = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({ message: 'Sucesso!' }), { status: 200 });
    } else {
      console.error('Brevo API Error:', responseData);
      return new Response(JSON.stringify({ message: 'Erro na Brevo', details: responseData }), { status: response.status });
    }
  } catch (error) {
    console.error('Subscription Error:', error);
    return new Response(JSON.stringify({ message: 'Erro interno no servidor' }), { status: 500 });
  }
};
