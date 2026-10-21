import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🧸</span>
        <span className="logo-text">Ma Garderie</span>
      </div>
      <ul className="nav-links">
        <li><Link href="#accueil">Accueil</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#activites">Activités</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
