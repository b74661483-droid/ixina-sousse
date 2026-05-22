export default function IxinaSousseWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-black text-white px-8 py-6 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">IXINA SOUSSE</h1>
        <nav className="flex gap-6 text-sm uppercase tracking-wider">
          <a href="#about" className="hover:text-yellow-400">À propos</a>
          <a href="#kitchens" className="hover:text-yellow-400">Nos cuisines</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </header>

      <section
        className="h-[90vh] bg-cover bg-center flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-3xl max-w-3xl text-white backdrop-blur-sm">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre cuisine allemande sur mesure à Sousse
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Design premium, qualité allemande et accompagnement personnalisé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-semibold transition-all">
              Demander un devis
            </button>
            <button className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all">
              Voir les réalisations
            </button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop"
          alt="Cuisine premium"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <h3 className="text-5xl font-bold mb-8">À propos de Ixina Sousse</h3>
          <p className="text-lg leading-8 text-gray-700 mb-6">
            Ixina Sousse vous accompagne dans la création de cuisines modernes,
            élégantes et parfaitement adaptées à votre style de vie.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {[
              'Cuisine allemande',
              'Conception 3D',
              'Installation clé en main',
              'Garantie 10 ans',
              'Accompagnement personnalisé',
              'Design haut de gamme',
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-100 p-5 rounded-2xl font-medium shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kitchens" className="bg-gray-100 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16">
            Nos cuisines
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cuisine moderne',
                image:
                  'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Cuisine blanche élégante',
                image:
                  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Cuisine bois & naturel',
                image:
                  'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((kitchen) => (
              <div
                key={kitchen.title}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all"
              >
                <img
                  src={kitchen.image}
                  alt={kitchen.title}
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-bold">{kitchen.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-8 max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold text-center mb-16">
          Pourquoi nous choisir
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'Qualité allemande',
            'Installation professionnelle',
            'Respect du budget',
            'Conseils personnalisés',
            'Design moderne',
            'Service après vente',
          ].map((service) => (
            <div
              key={service}
              className="bg-black text-white p-10 rounded-3xl text-center shadow-2xl hover:scale-105 transition-all"
            >
              <h4 className="text-2xl font-semibold">{service}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 py-20 text-center px-6">
        <h3 className="text-5xl font-bold mb-6">
          Transformez votre cuisine dès aujourd’hui
        </h3>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Prenez rendez-vous avec nos concepteurs pour créer la cuisine de vos rêves.
        </p>

        <button className="bg-black text-white px-10 py-5 rounded-2xl text-lg hover:bg-gray-900 transition-all">
          Prendre rendez-vous
        </button>
      </section>

      <footer
        id="contact"
        className="bg-black text-white py-16 px-8"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">Ixina Sousse</h4>
            <p className="text-gray-300 leading-7">
              Route Akouda Sahloul Hammam Sousse
              <br />
              Tunisie
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">Contact</h4>
            <p className="text-gray-300 leading-7">
              Téléphone : +216 58 408 880
              <br />
              Email : contact@ixina.tn
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-4">Horaires</h4>
            <p className="text-gray-300 leading-7">
              Lundi - Samedi
              <br />
              09:00 - 18:00
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          © 2026 Ixina Sousse — Tous droits réservés.
        </div>
      </footer>
    </div>
  )
}
