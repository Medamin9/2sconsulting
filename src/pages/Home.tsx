import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, Shield, Clock, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";

const Home = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Expertise reconnue',
      description: 'Plus de 15 ans d\'expérience dans l\'accompagnement d\'entreprises',
    },
    {
      icon: Shield,
      title: 'Conformité garantie',
      description: 'Respect strict des réglementations tunisiennes et françaises',
    },
    {
      icon: Clock,
      title: 'Rapidité d\'exécution',
      description: 'Création de votre entreprise en 4 étapes simples et rapides',
    },
    {
      icon: HeadphonesIcon,
      title: 'Accompagnement personnalisé',
      description: 'Un conseiller dédié pour répondre à tous vos besoins',
    },
  ];

  const packages = [
    {
      name: 'SUARL',
      description: 'Société Unipersonnelle à Responsabilité Limitée',
      price: 'À partir de 1200 TND',
      features: [
        'Un seul associé',
        'Capital minimum : 1 TND',
        'Responsabilité limitée',
        'Gestion simplifiée',
        'Idéal pour freelance',
      ],
      popular: false,
    },
    {
      name: 'SARL',
      description: 'Société à Responsabilité Limitée',
      price: 'À partir de 1500 TND',
      features: [
        '2 à 50 associés',
        'Capital minimum : 1 TND',
        'Responsabilité limitée',
        'Structure flexible',
        'Gestion collective',
      ],
      popular: true,
    },
    {
      name: 'SA',
      description: 'Société Anonyme',
      price: 'À partir de 3000 TND',
      features: [
        'Minimum 7 actionnaires',
        'Capital minimum : 5000 TND',
        'Structure d\'envergure',
        'Cotation possible',
        'Grandes entreprises',
      ],
      popular: false,
    },
    {
      name: 'SA',
      description: 'Totalement exportatrice / Off-shore',
      price: 'À partir de 3000 TND',
      features: [
        
        'solutions internationales pour les non-résidents',
        
        'Cotation possible',
        'Grandes entreprises',
      ],
      popular: false,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Conseil personnalisé',
      description: 'Analyse de votre projet Choix de la meilleure structure',
    },
    {
      number: '02',
      title: ' Formalités ',
      description: ' Réservations, Rédaction des statuts, Dépôt de capital, Agrément AP',
    },
    {
      number: '03',
      title: ' Immatriculation',
      description: 'Dossier juridique Obtention matricule fiscal et inscription au RNE',
    },
    {
      number: '04',
      title: 'Lancement',
      description: 'Remise des documents package comptable de démarrage',
    },
  ];

  const testimonials = [
    {
      name: 'Amira B.',
      company: 'Tunis',
      text: 'Service rapide et efficace ! L’équipe a su m’accompagner à chaque étape de mon projet',
      rating: 5,
    },
    {
      name: 'Hajer G',
      company: 'Tunis',
      text: 'Professionnalisme et réactivité au rendez-vous. Je suis très satisfaite de mon expérience avec eux',
      rating: 5,
    },
    {
      name: 'Hatem S.',
      company: 'Paris',
      text: 'Une équipe très professionnelle qui sait allier rapidité et sécurité. Leur expertise m’a vraiment facilité toutes mes démarches en France',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Hero />



        {/* Popular Packages Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos formules les plus demandées
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choisissez la structure juridique qui correspond à votre projet
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`relative border-2 transition-all duration-300 hover:shadow-strong animate-fade-in ${
                    pkg.popular 
                      ? 'border-primary shadow-medium scale-105' 
                      : 'border-border shadow-soft hover:border-primary/50'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-10 -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-medium">
                        Le plus populaire
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold text-primary mb-6">
                      {pkg.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                      <Link to="/contact">
                        Choisir cette formule
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre méthode rapide en 4 étapes
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Un processus simple et transparent pour la création de votre entreprise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                      <span className="text-3xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
         {/* Section FAQ style PDF */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
      Les <span className="text-blue-700">Questions</span> les plus demandées
    </h2>

    <div className="space-y-6">

      {/* Question 1 */}
      <details className="group bg-white rounded-2xl shadow-sm p-6 cursor-pointer transition-all">
        <summary className="flex items-center justify-between font-semibold text-lg">
          1. Quelle forme juridique pour mon entreprise ?
          <span className="text-blue-700 text-2xl group-open:rotate-180 transition-transform"><FaArrowAltCircleDown /></span>
        </summary>
      </details>

      {/* Question 2 */}
      <details className="group bg-white rounded-2xl shadow-sm p-6 cursor-pointer transition-all open">
        <summary className="flex items-center justify-between font-semibold text-lg">
          2. Pourquoi choisir l'une ou l'autre ?
          <span className="text-blue-700 text-2xl group-open:rotate-180 transition-transform"><FaArrowAltCircleDown /></span>
        </summary>
        
        <div className="mt-4 text-gray-700 space-y-3">
          <p>
            Votre risque est limité au montant de vos apports (capital social).<br />
            Capital minimum : 1 000 TND pour les deux formes.<br />
            Gestion simplifiée : Vous pouvez nommer un ou plusieurs gérants.
          </p>

          <p className="font-medium flex items-start gap-2">
            <span className="text-blue-600 text-2xl"><FcIdea /></span>
            Notre conseil : Prenez 5 minutes avec notre expert pour choisir 
            la structure la plus adaptée à votre projet.
          </p>
        </div>
      </details>

      {/* Question 3 */}
      <details className="group bg-white rounded-2xl shadow-sm p-6 cursor-pointer transition-all">
        <summary className="flex items-center justify-between font-semibold text-lg">
          3. Je suis non-résident : rapatriement des bénéfices ?
          <span className="text-blue-700 text-2xl group-open:rotate-180 transition-transform"><FaArrowAltCircleDown /></span>
        </summary>
      </details>

    </div>
  </div>
</section>
     
        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ils nous font confiance
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Découvrez les témoignages de nos clients satisfaits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
};

export default Home;
