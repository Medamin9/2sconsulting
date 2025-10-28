import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Calculator, 
  FileText, 
  Scale, 
  TrendingUp,
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: 'Création d\'entreprise',
      description: 'Accompagnement complet pour la création de votre SUARL, SARL ou SA',
      features: [
        'Choix de la structure juridique adaptée',
        'Rédaction des statuts',
        'Dépôt et enregistrement',
        'Obtention des documents officiels',
        'Accompagnement personnalisé',
      ],
      color: 'primary',
    },
    {
      icon: MapPin,
      title: 'Domiciliation',
      description: 'Une adresse professionnelle prestigieuse pour votre entreprise',
      features: [
        'Adresse professionnelle en Tunisie ou France',
        'Réception et gestion du courrier',
        'Salles de réunion disponibles',
        'Service de secrétariat',
        'Contrat flexible',
      ],
      color: 'accent',
    },
    {
      icon: Calculator,
      title: 'Comptabilité',
      description: 'Gestion comptable complète et conforme aux normes',
      features: [
        'Tenue de comptabilité',
        'Déclarations fiscales',
        'Bilans annuels',
        'Conseil en optimisation fiscale',
        'Support permanent',
      ],
      color: 'primary-light',
    },
  ];

  const additionalServices = [
    {
      icon: FileText,
      title: 'Conseil juridique',
      description: 'Assistance juridique pour tous vos besoins d\'entreprise',
    },
    {
      icon: Scale,
      title: 'Conformité légale',
      description: 'Garantie de conformité avec les réglementations en vigueur',
    },
    {
      icon: TrendingUp,
      title: 'Développement d\'entreprise',
      description: 'Stratégies de croissance et d\'expansion',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nos Services
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Des solutions complètes pour créer, domicilier et gérer votre entreprise en toute sérénité
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {mainServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`}>
                    <Card className="border-2 border-primary shadow-strong">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                          <service.icon size={32} className="text-primary-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in`} style={{ animationDelay: '150ms' }}>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle2 size={24} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-lg text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Services complémentaires
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                D'autres services pour accompagner votre réussite
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon size={24} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tarifs transparents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Des formules adaptées à tous les budgets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { type: 'SUARL', price: '1200', ideal: 'Freelance & Solo' },
                { type: 'SARL', price: '1500', ideal: 'PME & Startups', popular: true },
                { type: 'SA', price: '3000', ideal: 'Grandes structures' },
              ].map((pricing, index) => (
                <Card 
                  key={index} 
                  className={`border-2 transition-all duration-300 hover:shadow-strong animate-fade-in ${
                    pricing.popular 
                      ? 'border-primary shadow-medium scale-105' 
                      : 'border-border shadow-soft'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {pricing.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Le plus populaire
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {pricing.type}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {pricing.ideal}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{pricing.price}</span>
                      <span className="text-muted-foreground"> TND</span>
                    </div>
                    <Button asChild className="w-full" variant={pricing.popular ? 'default' : 'outline'}>
                      <Link to="/contact">
                        Demander un devis
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=" py-20 bg-gradient-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Contactez-nous pour une consultation gratuite et personnalisée
              </p>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong">
                <Link to="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
