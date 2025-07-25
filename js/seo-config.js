const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Psi. Maria Vitória - Psicóloga em Criciúma | Terapia Online",
  "description": "Psicóloga especializada em Terapia Cognitivo-Comportamental (TCC). Atendimento online para Criciúma/SC e todo Brasil. CRP 12/28507.",
  "image": "https://www.psimariavitoria.com.br/img/imgprofissional.jpg",
  "@id": "https://www.psimariavitoria.com.br",
  "url": "https://www.psimariavitoria.com.br",
  "telephone": "+5548996578825",
  "priceRange": "$$", 
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "", 
    "addressLocality": "Criciúma",
    "addressRegion": "SC",
    "postalCode": "88801-000", 
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -28.6775, 
    "longitude": -49.3697
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Wednesday", "Friday"],
    "opens": "18:30",
    "closes": "21:00"
  },
  "sameAs": [
    "https://instagram.com/psicologamariavitoria_",
    "https://api.whatsapp.com/send?phone=5548996578825"
  ]
};


function injectSchemaMarkup() {
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schemaLocalBusiness);
  document.head.appendChild(scriptTag);
}


document.addEventListener('DOMContentLoaded', function() {
  injectSchemaMarkup();
  
 
  console.log('SEO configurado com sucesso!');
});