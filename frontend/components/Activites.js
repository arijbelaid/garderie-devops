"use client";
import { useEffect, useState } from 'react';

export default function Activites() {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    fetch('http://192.168.159.15:5000/api/activites')
      .then(res => res.json())
      .then(data => setActivites(data))
      .catch(err => console.error("Erreur:", err));
  }, []);

  return (
    <section id="activites" className="activites">
      <h2>Nos Activités</h2>
      <ul className="activites-list">
        {activites.map((act) => (
          <li key={act.id} className="activite-item">
            <strong>{act.nom}</strong> <br />
            <span>📅 {act.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
