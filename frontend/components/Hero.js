export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-content">
        <h1>Bienvenue à Ma Garderie</h1>
        <p>Un environnement sûr, chaleureux et épanouissant pour vos enfants. Nous proposons des activités éducatives et ludiques adaptées à chaque âge.</p>
        <button className="btn-primary">Nous contacter</button>
      </div>
      <div className="hero-image">
        {/* Image libre de droits depuis Unsplash */}
        <img 
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1000&auto=format&fit=crop" 
          alt="Enfants qui jouent à la garderie" 
        />
      </div>
    </section>
  );
}
