import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      category: 'Création d\'entreprise',
      description : "Démarrage simple et légal.",
      questions: [
        {
          q: 'Quelle forme juridique pour mon entreprise ?	',
          a: 'Le processus complet prend généralement entre 10 et 15 jours ouvrables, selon la structure juridique choisie et la disponibilité des documents requis. Pour une SUARL, cela peut être plus rapide (7-10 jours), tandis qu\'une SA peut nécessiter jusqu\'à 3 semaines.',
        },
        {
          q: "Pourquoi choisir l'une ou l'autre ?",
          a: ' Votre risque est limité au montant  de vos apports (capital social). Capital minimum : 1 000 TND pour les deux formes. Gestion simplifiée :Vous pouvez  nommer un ou plusieurs gérants.',
        },
      ],
    },
    {
      category: ' Fiscalité & obligations',
      description : "Conformité et démarches simplifiées.",
      questions: [
        {
          q: ' Quel est le taux de l’IS en Tunisie ?',
          a: 'Quel est le taux de l’IS en Tunisie ?',
        },
        {
          q: 'Quelles sont les obligations fiscales et sociales de mon entreprise ',
          a: 'Les avantages incluent : une adresse professionnelle prestigieuse, réduction des coûts (pas de location de bureau), gestion du courrier, accès à des salles de réunion, et une image professionnelle renforcée auprès de vos clients et partenaires.',
        },
      ],
    },
    {
      category: 'Comptabilité & Services',
      description : " Gestion financière sereine.",
      questions: [
        {
          q: 'Quels sont les tarifs de comptabilité et services offerts par votre cabinet ?',
          a: 'Bien que ce ne soit pas toujours légalement obligatoire, avoir un expert-comptable est fortement recommandé. Cela garantit la conformité de votre comptabilité, optimise votre fiscalité, et vous évite des erreurs coûteuses.',
        },
      ],
    },
    {
      category: ' Investissement & non-résidents',
      description : " Investissement & non-résidents",
      questions: [
        {
          q: 'Je suis non-résident : rapatriement des bénéfices ?',
          a: 'Je suis non-résident : rapatriement des bénéfices ?'
        },
        {
          q: ' Ai-je besoin d’un compte bancaire tunisien ?',
          a: ' i-je besoin d’un compte bancaire tunisien ?',
        },
      ],
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
                Questions Fréquentes
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Trouvez rapidement les réponses à vos questions les plus courantes
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {category.category}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {category.description}
                  </p>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${categoryIndex}-${index}`}
                        className="border border-border rounded-lg px-6 shadow-soft hover:shadow-medium transition-all"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-4">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle size={32} className="text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                 Vous avez une autre question ? Contactez nos experts
              </h2>
              <Button asChild size="lg" className="shadow-medium">
                <Link to="/contact">
                  Posez votre question
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

export default FAQ;
