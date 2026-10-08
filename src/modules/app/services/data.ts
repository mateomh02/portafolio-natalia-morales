// Cambia por el número real (país + número, sin "+" ni espacios)
export const phone = "573001234567";

export const wa = (service: string) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(`Hola Natalia, quiero información sobre: ${service}.`)}`;

// Fotos en public/servicios/
export const services = [
    {
        slug: "maquillaje",
        title: "Maquillaje",
        description:
            "Social, quinceañeras y novias. Piel luminosa y acabado natural que dura todo el día.",
        items: ["Maquillaje social", "Quinceañeras", "Novias con prueba previa"],
        photo: "maquillaje.jpg",
        alt: "Servicio de maquillaje profesional",
        icon: `<rect x="8" y="14" width="8" height="7" rx="1" /><path d="M9.5 14V9.5L12 4l2.5 5.5V14" />`,
    },
    {
        slug: "peinado",
        title: "Peinado",
        description:
            "Peinados que combinan con tu maquillaje y tu evento, desde algo suave hasta recogidos elegantes.",
        items: ["Recogidos", "Ondas y semirecogidos", "Peinado de novia"],
        photo: "peinado.jpg",
        alt: "Servicio de peinado para eventos",
        icon: `<circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />`,
    },
    {
        slug: "pautas-publicitarias",
        title: "Pautas publicitarias",
        description:
            "Maquillaje y contenido para campañas, sesiones y producciones de marcas.",
        items: ["Maquillaje para producción", "Sesiones de fotos y video", "Campañas de marca"],
        photo: "pautas.jpg",
        alt: "Maquillaje para producciones publicitarias",
        icon: `<rect x="3" y="7" width="18" height="13" rx="3" /><circle cx="12" cy="13.5" r="3.5" /><path d="M8 7l1.5-3h5L16 7" />`,
    },
    {
        slug: "contenido-para-marcas",
        title: "Contenido para marcas",
        description:
            "Videos y fotos para redes con mi estilo, listos para publicar en tu marca.",
        items: ["Reels y shorts", "Reseñas de producto", "Tutoriales"],
        photo: "contenido.jpg",
        alt: "Creación de contenido para marcas",
        icon: `<rect x="3" y="4" width="18" height="16" rx="4" /><path d="M10 9l5 3-5 3z" />`,
    },
];