exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, phone, service, budget, message } = JSON.parse(event.body || "{}");

    if (!name || !phone || !service || !message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    if (typeof phone === "string" && !/^\+?[0-9]{7,15}$/.test(phone)) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid phone number" }),
      };
    }

    const agencyPhone = process.env.WHATSAPP_NUMBER || "9779700804395";

    const formattedText = `Hello Ganga Marketing Agency!

New Website Inquiry:
• Name: ${String(name).trim()}
• Contact: ${String(phone).trim()}
• Requested Service: ${service}
• Budget: ${budget || "Not Specified"}

Message:
"${String(message).trim()}"`;

    const whatsappUrl = `https://wa.me/${agencyPhone}?text=${encodeURIComponent(formattedText)}`;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "success",
        message: "Lead processed successfully",
        data: { whatsapp_url: whatsappUrl },
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
