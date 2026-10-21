export default function Services() {
  // Données temporaires (seront remplacées par le backend à l'étape 4)
  const services = [
    { id: 1, icon: "👶", title: "Crèche", description: "Accueil des tout-petits de 3 mois à 3 ans." },
    { id: 2, icon: "🎨", title: "Activités Créatives", description: "Peinture, dessin et travaux manuels." },
    { id: 3, icon: "🎵", title: "Éveil Musical", description: "Chansons et découverte des instruments." },
  ];

  return (
    <section id="services" className="services">
      <h2>Nos Services</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
