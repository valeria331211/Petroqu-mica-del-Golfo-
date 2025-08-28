import React from 'react';

// Petroquímica del Golfo - Single-file React component (Tailwind CSS)
// Default export: <PetroquimicaSite />

const company = {
  name: 'Petroquímica del Golfo S.A. de C.V.',
  tagline: 'Soluciones químicas industriales con compromiso ambiental y seguridad',
  address: 'Av. Industrial 123, Complejo Pajaritos, Minatitlán, Veracruz, México',
  phone: '+52 922 123 4567',
  email: 'contacto@petroquimicadelgolfo.mx',
  founded: '2025',
};

function Topbar() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-600 to-emerald-400 flex items-center justify-center text-white font-bold">
            PG
          </div>
          <div>
            <h1 className="text-lg font-semibold">{company.name}</h1>
            <p className="text-xs text-slate-600">{company.tagline}</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-700">
          <a href="#about" className="hover:underline">Nosotros</a>
          <a href="#services" className="hover:underline">Servicios</a>
          <a href="#safety" className="hover:underline">Seguridad</a>
          <a href="#projects" className="hover:underline">Proyectos</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>
        <div className="md:hidden text-slate-700">☰</div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">{company.name}</h2>
          <p className="mt-4 text-lg text-slate-600">Combinamos experiencia industrial, cumplimiento normativo y responsabilidad ambiental para ofrecer productos y servicios petroquímicos confiables.</p>
          <div className="mt-6 flex gap-4">
            <a href="#contact" className="inline-block px-6 py-3 rounded-xl bg-sky-600 text-white font-medium shadow">Contáctanos</a>
            <a href="#safety" className="inline-block px-6 py-3 rounded-xl border border-slate-200 text-slate-700">Ver PPA y seguridad</a>
          </div>
          <ul className="mt-8 text-sm text-slate-600 space-y-2">
            <li>✅ Cumplimiento con normativas ambientales y de seguridad</li>
            <li>✅ Manejo seguro de sustancias peligrosas</li>
            <li>✅ Planes de contingencia y brigadas internas</li>
          </ul>
        </div>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=1200&q=60" alt="Planta petroquímica" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-slate-800">Nosotros</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-8 text-slate-600">
        <div>
          <p>
            Petroquímica del Golfo es una empresa ficticia creada para fines de proyecto y documentación. Opera instalaciones de procesamiento y almacenamiento de
            productos químicos con énfasis en seguridad industrial y protección ambiental.
          </p>
          <ul className="mt-4 space-y-2">
            <li><strong>Fundada:</strong> {company.founded}</li>
            <li><strong>Ubicación:</strong> {company.address}</li>
            <li><strong>Contacto:</strong> {company.phone} • {company.email}</li>
          </ul>
        </div>
        <div className="bg-white/60 p-6 rounded-2xl shadow-inner">
          <h4 className="font-semibold text-slate-800">Misión</h4>
          <p className="mt-2 text-sm text-slate-600">Proveer productos y servicios petroquímicos seguros y sostenibles, minimizando riesgos para las personas y el entorno.</p>
          <h4 className="mt-4 font-semibold text-slate-800">Visión</h4>
          <p className="mt-2 text-sm text-slate-600">Ser reconocidos por nuestras buenas prácticas ambientales y por mantener los más altos estándares de seguridad.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { title: 'Producción y procesamiento', desc: 'Transformación controlada de materias primas en productos petroquímicos.' },
    { title: 'Almacenamiento seguro', desc: 'Sistemas de almacenamiento con contención y medidas anti-derrame.' },
    { title: 'Asesoría en seguridad', desc: 'Elaboración de PPA, simulacros y capacitación para brigadas.' },
  ];

  return (
    <section id="services" className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-slate-800">Servicios</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <article key={it.title} className="p-6 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold text-slate-800">{it.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <section id="safety" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-slate-800">Seguridad y PPA</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-8 text-slate-600">
        <div>
          <p>
            Contamos con un Programa para la Prevención de Accidentes (PPA) acorde a la Guía de SEMARNAT. El PPA incluye identificación de peligros, evaluación
            de escenarios, medidas de prevención y plan de respuesta a emergencias con brigadas capacitados.
          </p>
          <ul className="mt-4 space-y-2">
            <li>• Inventario y fichas de seguridad de sustancias peligrosas.</li>
            <li>• Procedimientos operativos y de bloqueo/etiquetado.</li>
            <li>• Simulacros y capacitaciones anuales.</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h4 className="font-semibold text-slate-800">Brigadas y Contactos de Emergencia</h4>
          <p className="mt-2 text-sm">Jefe de Seguridad: Ing. Laura Reyes • +52 922 555 0101</p>
          <p className="mt-1 text-sm">Coordinador de Brigadas: Lic. Miguel Torres • +52 922 555 0102</p>
          <a href="#contact" className="mt-4 inline-block text-sm font-medium underline">Solicitar copia del PPA (formato)</a>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { name: 'Ampliaci\u00f3n de almacenamiento', summary: 'Nueva celda segura con sistema termoventilado y detecci\u00f3n temprana.' },
    { name: 'Sistema de tratamiento de aguas', summary: 'Planta de tratamiento para efluentes con control de vertidos.' },
  ];

  return (
    <section id="projects" className="bg-emerald-50/40 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl font-semibold text-slate-800">Proyectos recientes</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl bg-white shadow-sm">
              <h4 className="font-semibold">{p.name}</h4>
              <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-slate-800">Contacto</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <label className="block text-sm text-slate-600">Nombre</label>
            <input className="mt-1 w-full border rounded-md p-2" placeholder="Tu nombre" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">Correo</label>
            <input className="mt-1 w-full border rounded-md p-2" placeholder="correo@ejemplo.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-600">Mensaje</label>
            <textarea className="mt-1 w-full border rounded-md p-2" rows={4} placeholder="Escribe tu mensaje" />
          </div>
          <button type="button" className="px-6 py-2 rounded-lg bg-sky-600 text-white">Enviar</button>
        </form>

        <div className="text-slate-600">
          <h4 className="font-semibold">Información</h4>
          <p className="mt-2 text-sm">Dirección: {company.address}</p>
          <p className="mt-1 text-sm">Tel: {company.phone}</p>
          <p className="mt-1 text-sm">Correo: {company.email}</p>

          <div className="mt-4">
            <h5 className="font-medium">Horario</h5>
            <p className="text-sm">Lun - Vie: 8:00 - 18:00</p>
            <p className="text-sm">Sáb: 9:00 - 13:00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white/90 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-600">
        <p>© {new Date().getFullYear()} {company.name}. Todos los derechos reservados.</p>
        <div className="mt-3 md:mt-0">
          <a href="#" className="mr-4">Aviso de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default function PetroquimicaSite() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-gradient-to-b from-white to-slate-50">
      <Topbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Safety />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
