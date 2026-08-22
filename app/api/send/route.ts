import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, project, message } = body;

    if (!name || !email || !project || !message) {
      return Response.json(
        { error: "Lütfen tüm alanları doldurun." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Oktay Studio <onboarding@resend.dev>",

      // Mail senin Gmail'ine gelecek
      to: ["dolasmazoktay65@gmail.com"],

      // Gmail'de "Yanıtla" dediğinde müşteriye gider
      replyTo: email,

      subject: `🔥 Yeni Proje Talebi - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>🔥 Yeni Proje Talebi</h2>

          <p><strong>Ad Soyad:</strong> ${name}</p>

          <p><strong>Müşteri E-postası:</strong> ${email}</p>

          <p><strong>Proje Türü:</strong> ${project}</p>

          <hr />

          <p><strong>Mesaj:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });

  } catch {
    return Response.json(
      { error: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}