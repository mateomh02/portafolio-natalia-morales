const phone = "573187605037";
const message = "Hola Natalia, quiero reservar una cita.";

export const WHATSAPP_URL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const phoneCreator = "573057675512";
const messageCreator = "Hola, Andrés. Quiero hacer mi página web con ustedes.";

export const WHATSAPP_URL_CREATOR = `https://wa.me/${phoneCreator}?text=${encodeURIComponent(messageCreator)}`;