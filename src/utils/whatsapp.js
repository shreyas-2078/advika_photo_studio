export const PRIMARY_WHATSAPP_NUMBER = "919529838773";
export const SECONDARY_PHONE_NUMBER = "+91 93092 85266";
export const INSTAGRAM_URL = "https://www.instagram.com/advika_visuals/";
export const LOCATION_TEXT = "Nimon, Taluka Sangamner, District Ahilyanagar, Maharashtra, India";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Nimon+Sangamner+Ahilyanagar+Maharashtra";

/**
 * Builds the WhatsApp direct chat link with the encoded enquiry message.
 */
export function generateWhatsAppUrl(formData) {
  const {
    fullName = "",
    mobile = "",
    email = "",
    address = "",
    city = "",
    services = [],
    date = "",
    time = "",
    location = "",
    duration = "",
    people = "",
    budget = "",
    requirements = "",
  } = formData;

  const servicesStr = Array.isArray(services) && services.length > 0 
    ? services.join(", ") 
    : (typeof services === 'string' && services) || "General Enquiry";

  const messageLines = [
    "Hello Advika Photo, Film & Graphics! ✨",
    "",
    "I would like to enquire about a photography / film booking.",
    "",
    `👤 Name: ${fullName.trim() || "Not specified"}`,
    `📞 Mobile: ${mobile.trim() || "Not specified"}`,
    email.trim() ? `✉️ Email: ${email.trim()}` : null,
    `🏠 Address: ${address.trim() || "Not specified"}`,
    `📍 City/Village: ${city.trim() || "Not specified"}`,
    `📸 Service(s): ${servicesStr}`,
    `📅 Event Date: ${date || "To be discussed"}`,
    time ? `⏰ Preferred Time: ${time}` : null,
    location.trim() ? `🗺️ Shoot Location / Venue: ${location.trim()}` : null,
    duration ? `⏳ Duration: ${duration}` : null,
    people ? `👥 Number of People: ${people}` : null,
    budget ? `💰 Budget Range: ${budget}` : null,
    requirements.trim() ? `📝 Additional Requirements: ${requirements.trim()}` : null,
    "",
    "Please share availability and pricing details.",
    "",
    "Thank you!"
  ].filter(line => line !== null);

  const rawMessage = messageLines.join("\n");
  const encoded = encodeURIComponent(rawMessage);
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsAppDirect(customMessage) {
  const text = customMessage || "Hello Advika Photo, Film & Graphics! I would like to enquire about your photography and film packages.";
  const url = `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
