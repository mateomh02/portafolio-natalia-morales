const phone = "573187605037";
const message = "Hola Natalia, quiero reservar una cita.";

export const WHATSAPP_URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;