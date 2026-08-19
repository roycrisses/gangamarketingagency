export const AGENCY_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9779700804395";

const AGENCY_NAME = "Ganga Marketing Agency";

export const buildWhatsAppUrl = (formData) => {
  const rawMessage = `Hello ${AGENCY_NAME}!

New Website Inquiry:
• Name: ${formData.name?.trim()}
• Contact: ${formData.phone?.trim()}
• Requested Service: ${formData.service}
• Budget: ${formData.budget || "Not Specified"}

Message:
"${formData.message?.trim()}"`;

  const encodedMessage = encodeURIComponent(rawMessage);
  return `https://wa.me/${AGENCY_WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const getWhatsAppContactUrl = (text) => {
  const url = `https://wa.me/${AGENCY_WHATSAPP_NUMBER}`;
  return text ? `${url}?text=${encodeURIComponent(text)}` : url;
};

export const handleWhatsAppSubmit = (formData) => {
  const whatsappUrl = buildWhatsAppUrl(formData);
  window.open(whatsappUrl, "_blank");
  return whatsappUrl;
};
