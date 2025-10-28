import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award, Globe } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import deskImage from "@/assets/desk.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Nous visons l'excellence dans chaque projet et assurons un service de qualité supérieure",
    },
    {
      icon: Heart,
      title: "Engagement",
      description:
        "Nous nous engageons à accompagner nos clients avec passion et dévouement",
    },
    {
      icon: Award,
      title: "Professionnalisme",
      description:
        "Une équipe d'experts certifiés et qualifiés pour répondre à tous vos besoins",
    },
    {
      icon: Globe,
      title: "Vision internationale",
      description:
        "Présents en Tunisie et en France pour faciliter vos projets transfrontaliers",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 text-primary-foreground">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={deskImage}
              alt="Bureau professionnel"
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nous simplifions vos démarches pour que vous concentriez sur
                l'essentiel
              </h1>
            </div>
          </div>
        </section>

        {/* Who Are We Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    Qui sommes-nous ?
                  </h2>
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Notre mission : transformer la complexité en{" "}
                    <span className="text-blue-600">simplicité</span>.
                  </h3>
                </div>
              </div>

              <div className="space-y-6 animate-fade-in">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Depuis 2013, 2S Consulting, société d'expertise comptable,
                    accompagne entrepreneurs tunisiens et investisseurs
                    internationaux dans toutes les étapes de la vie de leur
                    société en Tunisie.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Avec une antenne également en France, nous combinons
                    expertise locale et ouverture internationale pour vous
                    offrir un accompagnement complet.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nous transformons la complexité administrative et juridique
                    en un processus simple, clair et efficace, pour que vous
                    puissiez vous concentrer sur l'essentiel : votre projet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Notre expertise à{" "}
                <span className="text-blue-600">votre service</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-blue-600 text-white rounded-3xl p-8 text-center space-y-6 animate-fade-in hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  <svg
                    className="w-20 h-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">
                  Plus de 10 ans d'expertise
                </h3>
                <p className="text-lg leading-relaxed">
                  Plus de dix ans d'expérience concrète dans la création
                  d'entreprises en Tunisie
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-600 text-white rounded-3xl p-8 text-center space-y-6 animate-fade-in hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  <svg
                    className="w-20 h-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Démarches simplifiées</h3>
                <p className="text-lg leading-relaxed">
                  Maîtrise des démarches administratives et juridiques locales
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-600 text-white rounded-3xl p-8 text-center space-y-6 animate-fade-in hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center">
                  <svg
                    className="w-20 h-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">
                  Service rapide et sécurisé
                </h3>
                <p className="text-lg leading-relaxed">
                  Anticipation des délais pour éviter toute surprise
                </p>
              </div>
            </div>
          </div>
        </section>

{/* What We Bring Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
      {/* Left Side - Title */}
      <div className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ce que nous vous <span className="text-blue-600">apportons!</span>
        </h2>
      </div>

      {/* Right Side - Benefits */}
      <div className="space-y-8 animate-fade-in bg-slate-100 p-6 rounded-2xl">
        {/* Benefit 1 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Gain de temps :</h3>
            <p className="text-muted-foreground">
              Nous prenons en charge toutes les démarches, pendant que vous développez votre business
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Sécurité juridique</h3>
            <p className="text-muted-foreground">
              Choix de la forme sociale adaptée, rédaction des statuts et conformité légale
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Comptabilité & Fiscalité</h3>
            <p className="text-muted-foreground">
              Comptabilité, déclarations fiscales et conseils de gestion
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Why Choose 2S Consulting */}
    <div className="mb-16 animate-fade-in flex ">
      <h2 className=" w- 1/3 text-3xl md:text-4xl font-bold text-foreground mb-12">
        Pourquoi choisir <span className="text-blue-600">2S Consulting</span> ?
      </h2>

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Feature 1 */}
  <div className="text-center space-y-4 bg-slate-100 p-6 rounded-xl">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </div>
    <p className="text-foreground font-medium">
      Un accompagnement personnalisé, de l'idée initiale jusqu'au lancement
    </p>
  </div>

  {/* Feature 2 */}
  <div className="text-center space-y-4 bg-slate-100 p-6 rounded-xl">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </div>
    </div>
    <p className="text-foreground font-medium">
      Tarifs transparents et communication directe avec votre interlocuteur dédié
    </p>
  </div>

  {/* Feature 3 */}
  <div className="text-center space-y-4 bg-slate-100 p-6 rounded-xl">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    <p className="text-foreground font-medium">
      Une expertise éprouvée en Tunisie et en France
    </p>
  </div>

  {/* Feature 4 */}
  <div className="text-center space-y-4 bg-slate-100 p-6 rounded-xl">
    <div className="flex justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      </div>
    </div>
    <p className="text-foreground font-medium">
      Une solution clé en main pour démarrer sereinement
    </p>
  </div>
</div>
    </div>

    {/* CTA */}
    <div className="text-center animate-fade-in">
      <p className="text-2xl md:text-3xl font-bold text-foreground mb-6">
        Votre <span className="text-blue-600">succès</span> commence par des bases solides.
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
        Contactez-nous pour un échange gratuit
      </button>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
